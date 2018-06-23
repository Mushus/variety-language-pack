const Fizzbuzz = require('./fizzbuzz.js');

Fizzbuzz.fizzbuzz(100).forEach(v => process.stdout.write(`${v}\n`));

process.exit(0);
