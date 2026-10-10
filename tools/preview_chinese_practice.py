"""Local preview; optionally read media from the original checkout without copying it."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=4173)
parser.add_argument('--assets-from', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]


class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        local = super().translate_path(path)
        parts = Path(unquote(urlsplit(path).path).lstrip('/')).parts
        if args.assets_from and parts and parts[0] in ('images', 'audio', 'videos'):
            source = args.assets_from.joinpath(*parts).resolve()
            if source.is_relative_to(args.assets_from.resolve()) and source.is_file():
                return str(source)
        return local


server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, directory=str(root)))
print(f'Local preview: http://127.0.0.1:{args.port}/chinese-practice.html', flush=True)
server.serve_forever()
