const heap = require('./heap.js');

const ary = Array(100).fill(null).map(() => Math.random())

heap.sort(ary).forEach(v => process.stdout.write(`${v}\n`));
process.exit(0);
