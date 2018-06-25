/**
 * 非破壊的なマージソート
 * @param {number[]} ary 数値の配列
 */
const sort = ary => {
  if (ary.length == 0) return []
  if (ary.length == 1) return ary
  const spliceAry = [...ary]
  return merge(sort(spliceAry.splice(0, spliceAry.length / 2)), sort(spliceAry))
}

const merge = (ary1, ary2) => {
  const ret = [];
  while (ary1.length > 0 && ary2.length > 0) {
    ret.push(ary1[0] < ary2[0] ? ary1.shift() : ary2.shift())
  }
  return ret.concat(ary1).concat(ary2);
}

module.exports.sort = sort
