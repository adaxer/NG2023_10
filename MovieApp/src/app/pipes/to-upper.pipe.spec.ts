import { ToUpperPipe } from './to-upper.pipe';

describe('ToUpperPipe', () => {

  let pipe: ToUpperPipe;

  beforeEach(() => {
    pipe = new ToUpperPipe();
  });

  it('should transform "Hello" to "HELLO"', () => {
    expect(pipe.transform('hello')).toBe('HELLO');
  });

  it('should transform "worlD" to "WORLD"', () => {
    expect(pipe.transform('worlD')).toBe('WORLD');
  });
});
