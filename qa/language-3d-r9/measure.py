import collections
import json
import sys
from pathlib import Path

root=Path(sys.argv[1]).resolve()
assert root.is_dir()
sizes=collections.Counter()
for p in root.rglob('*'):
    if p.is_symlink():
        raise RuntimeError(f'unexpected symlink {p.relative_to(root)}')
    if not p.is_file():
        continue
    parts=p.relative_to(root).parts
    key='/'.join(parts[:2]) if len(parts)>2 and parts[0] in ('images','modules','assets','audio','videos') else parts[0]
    sizes[key]+=p.stat().st_size
story=sizes['images/story']+sizes['images/story-vocabulary']
all_bytes=sizes.total()
print(json.dumps(dict(
    staged_total_bytes=all_bytes, page_budget_decimal=1_000_000_000,
    staged_over_budget=all_bytes>=1_000_000_000,
    story_pack_bytes=story, remaining_without_story_packs=all_bytes-story,
    largest=sizes.most_common(24)
),indent=2))
