const mearge = require('./mearge');


describe("mearge sort", () => {
  test('test sort', () => {
    expect(mearge.sort([5,6,3,1,8,9,4,0,7,2])).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  test('test non destructive', () => {
    const ary = [5,6,3,1,8,9,4,0,7,2];
    mearge.sort(ary)
    expect(ary).toEqual([5,6,3,1,8,9,4,0,7,2]);
  })
})
