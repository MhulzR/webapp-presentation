const addition = require('./operations').addition;

describe('addition', () => {
  it('should return 5 if I add 2 and 3', () => {
    const result = addition(2, 3);
    expect(result).toEqual(20);
  });
});
