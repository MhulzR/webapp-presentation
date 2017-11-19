const addition = require('./operations').addition;

describe('addition', () => {
  it('should return 7 if I add 2 and 5', () => {
    const result = addition(2, 5);
    expect(result).toEqual(7);
  });
});
