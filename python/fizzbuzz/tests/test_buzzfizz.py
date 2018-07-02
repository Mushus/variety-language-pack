import unittest
import fizzbuzz

class FizzBuzzTest(unittest.TestCase):
  def test_fizzbuzz(self):
    result = fizzbuzz.fizzbuzz(20)
    self.assertEqual(result, ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'], "collect fizzbuzz")
