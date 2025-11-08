const { counterReducer, INCREMENT, DECREMENT } = require('../../store/counterReducer');

describe('counterReducer', () => {
  it('increments', () => {
    const result = counterReducer({ value: 0 }, { type: INCREMENT });
    expect(result.value).toBe(1);
  });

  it('decrements', () => {
    const result = counterReducer({ value: 2 }, { type: DECREMENT });
    expect(result.value).toBe(1);
  });

  it('returns current state on unknown action', () => {
    const state = { value: 5 };
    expect(counterReducer(state, { type: 'UNKNOWN' })).toBe(state);
  });
});
