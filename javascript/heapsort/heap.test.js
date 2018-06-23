const heap = require('./heap.js');

test('test heap sort', () => {
  expect(heap.sort([5,6,3,1,8,9,4,0,7,2])).toEqual([0,1,2,3,4,5,6,7,8,9]);
});
