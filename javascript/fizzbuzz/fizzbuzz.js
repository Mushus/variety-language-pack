/**
 * fizzbuzz問題を解いて配列に返す関数
 * @param {number} n - 配列の長さ
 * @return {string[]} - 長さ n の fizzbuzz の結果が格納された配列
 */
const fizzbuzz = n => Array.apply(null, Array(n)).
  map((_, i) => i + 1).
  map(i => (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || ('' + i));

module.exports.fizzbuzz = fizzbuzz
