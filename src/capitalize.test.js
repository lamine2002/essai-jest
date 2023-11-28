import capitalize from './capitalize';

test('capitalizes the first letter of every word in a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('a short sentence')).toBe('A short sentence');
    expect(capitalize('a lazy fox')).toBe('A lazy fox');
    expect(capitalize('look, it is working!')).toBe('Look, it is working!');

});