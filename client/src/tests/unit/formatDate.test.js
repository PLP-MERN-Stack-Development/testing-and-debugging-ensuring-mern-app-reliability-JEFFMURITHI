const formatDate = require('../../utils/formatDate');

describe('formatDate', () => {
  it('returns empty for falsy', () => {
    expect(formatDate(null)).toBe('');
  });
  it('formats valid ISO', () => {
    const s = formatDate('2020-01-01T00:00:00Z');
    expect(typeof s).toBe('string');
    expect(s.length).toBeGreaterThan(0);
  });
  it('returns empty for invalid', () => {
    expect(formatDate('bad')).toBe('');
  });
});
