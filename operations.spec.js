const addition = require('./operations').addition;

describe('addition', () => {
  it('should return 5 if I add 2 and 3', () => {
    const result = addition(3, 4);
    expect(result).toEqual(7);
  });
});
