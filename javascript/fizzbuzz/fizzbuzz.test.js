const Fizzbuzz = require('./fizzbuzz.js');

test('test fizzbuzz', () => {
  expect(Fizzbuzz.fizzbuzz(20)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz']);
});
