const getWord = require('./index');

console.log(getWord());

test('getting back a string', () => {
    expect(typeof getWord()).toBe('string');
});