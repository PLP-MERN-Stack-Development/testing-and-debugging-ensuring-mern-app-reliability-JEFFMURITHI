const { isEmail } = require('../../src/utils/validator');

describe('isEmail util', () => {
  it('validates correct emails', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  it('rejects wrong values', () => {
    expect(isEmail('plain')).toBe(false);
    expect(isEmail(null)).toBe(false);
  });
});
