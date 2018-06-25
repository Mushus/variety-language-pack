const mearge = require('./mearge');

const ary = Array(100).fill(null).map(() => Math.random())

mearge.sort(ary).forEach(v => process.stdout.write(`${v}\n`));
process.exit(0);
