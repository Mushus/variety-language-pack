const Fizzbuzz = require('./fizzbuzz.js');
/**
 * 配列を標準出力する
 * @param {any[]} ary - 出力する配列
 */
const printArray = ary => ary.forEach(v => process.stdout.write(`${v}\n`));

printArray(Fizzbuzz.fizzbuzz(100));
process.exit(0);
