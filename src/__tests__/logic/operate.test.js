import operate from '../../logic/operate';

describe('Operations', () => {
  it('Should return an object', () => {
    const res = operate('70', '7', '+');
    expect(typeof res).toEqual('object');
  });

  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });

  it('Should add two numbers', () => {
    const res = operate('70', '7', '+');
    expect(res * 1).toBe(77);
  });

  it('Should subtract two numbers value', () => {
    const res = operate('7', '70', '-');
    expect(res * 1).toEqual(-63);
  });

  it('Should return a divided value', () => {
    const res = operate('70', '7', '÷');
    expect(res * 1).toEqual(10);
  });

  it('Should multiply 2 numbers', () => {
    const res = operate('2', '4', '*');
    expect(res * 1).toEqual(8);
  });
});
