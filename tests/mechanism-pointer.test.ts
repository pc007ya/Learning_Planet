import { describe, expect, it, vi } from 'vitest';
import { Mechanism } from '../src/experiments/mechanism';

function setup(kind = 'car') {
  const captures = new Set<number>();
  const stage = {
    setPointerCapture: vi.fn((id: number) => captures.add(id)),
    hasPointerCapture: (id: number) => captures.has(id),
    releasePointerCapture: vi.fn((id: number) => captures.delete(id)),
  };
  const model = Object.assign(Object.create(Mechanism.prototype), {
    kind, stage, dragging: null, yaw: 0, minutes: 60, pullValue: .5,
    carMode: 'test', mode: 'whole', clockRotate: false, wake: vi.fn(), action: vi.fn(),
  });
  const pointer = (pointerId: number, clientX: number) => ({
    pointerId, clientX, button: 0, target: { closest: () => null },
  }) as unknown as PointerEvent;
  return { model, stage, captures, pointer };
}

describe('mechanism pointer ownership', () => {
  it('ignores a second finger without overwriting the first drag', () => {
    const { model, stage, pointer } = setup();
    model.pointerDown(pointer(11, 200));
    model.pointerDown(pointer(22, 50));
    model.pointerMove(pointer(22, 0));
    model.pointerUp(pointer(22, 0));
    model.cancelDrag(22);
    expect(stage.setPointerCapture).toHaveBeenCalledTimes(1);
    expect(model.dragging).toMatchObject({ pointer: 11, x: 200 });
    expect(model.action).not.toHaveBeenCalled();
    model.pointerMove(pointer(11, 110));
    expect(model.action).toHaveBeenLastCalledWith(1, false);
  });

  it('only the owning pointer can release and launch the car, once', () => {
    const { model, pointer, captures, stage } = setup();
    model.pointerDown(pointer(11, 200)); model.pointerMove(pointer(11, 110));
    model.pointerUp(pointer(11, 110)); model.pointerUp(pointer(11, 110));
    expect(model.action.mock.calls.filter((call: unknown[]) => call[1] === true)).toEqual([[-1, true]]);
    expect(model.dragging).toBeNull(); expect(captures.size).toBe(0);
    expect(stage.releasePointerCapture).toHaveBeenCalledWith(11);
  });

  it('cancels an interrupted drag without launching and accepts a fresh gesture', () => {
    const { model, pointer } = setup();
    model.pointerDown(pointer(11, 200)); model.pointerMove(pointer(11, 110));
    model.cancelDrag(); model.pointerUp(pointer(11, 110));
    expect(model.action).toHaveBeenCalledTimes(1);
    expect(model.dragging).toBeNull();
    model.pointerDown(pointer(22, 300)); model.pointerMove(pointer(22, 255));
    expect(model.dragging.pointer).toBe(22);
    expect(model.action).toHaveBeenLastCalledWith(.75, false);
  });

  it('clears state before releasing capture to tolerate reentrant cancellation', () => {
    const { model, stage, captures, pointer } = setup();
    stage.releasePointerCapture.mockImplementation((id: number) => {
      expect(model.dragging).toBeNull(); captures.delete(id); model.cancelDrag(id); return true;
    });
    model.pointerDown(pointer(11, 200)); model.cancelDrag(11);
    expect(stage.releasePointerCapture).toHaveBeenCalledTimes(1);
  });

  it('does not let a different finger alter clock time', () => {
    const { model, pointer } = setup('clock');
    model.pointerDown(pointer(11, 200)); model.pointerMove(pointer(22, 320));
    expect(model.action).not.toHaveBeenCalled();
    model.pointerMove(pointer(11, 320));
    expect(model.action).toHaveBeenLastCalledWith(120, false);
  });

  it('keeps buttons and non-primary mouse buttons out of model gestures', () => {
    const { model, pointer, stage } = setup();
    model.pointerDown({ ...pointer(11, 200), button: 2 });
    model.pointerDown({ ...pointer(11, 200), target: { closest: () => ({}) } });
    expect(stage.setPointerCapture).not.toHaveBeenCalled();
  });
});
