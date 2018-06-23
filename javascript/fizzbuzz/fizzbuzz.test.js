const Fizzbuzz = require('./fizzbuzz.js');

test('test fizzbuzz', () => {
  expect(Fizzbuzz.fizzbuzz(10)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz']);
});
