/**
 * 破壊的なヒープソート
 * @param {number[]} ary 数値の配列
 */
const sort = ary => {
  // js は比較的 stack の少ない言語っぽく、末尾再帰も有効にないのでベタベタのループで処理する
  // 挿入
  let last = ary.length - 1;
  // iを挿入したことにしてヒープ木をつくる
  for (let i = 0; i <= last; i++) {
    let target = i
    while(target > 0) {
      const parent = (target - 1) >> 1;
      if (ary[parent] < ary[target]) {
        const tmp = ary[parent];
        ary[parent] = ary[target];
        ary[target] = tmp;
      }
      target = parent;
    }
  }
  // 末尾と交換して、末尾除外、壊れたヒープ木を直す
  for (; last > 0; last--) {
    const tmp = ary[last];
    ary[last] = ary[0];
    ary[0] = tmp;
    // 確定したので除外
    const heapLast = last - 1;
    let target = 0;
    let child = 1;
    // 交換した影響で根が小さい数になってしまっているので、
    // ヒープ技になるように枝の方に移動させる
    while(child <= heapLast) {
      // swapしたときにヒープが壊れないように大きい方を交換対象にする
      if (child < heapLast && ary[child] < ary[child + 1]) {
        child++;
      }
      // 親が大きかったらヒープ木になったので終了
      if (ary[target] > ary[child]) {
        break;
      }
      // 交換する
      const tmp = ary[target];
      ary[target] = ary[child];
      ary[child] = tmp;
      // 子供についても検証を行う
      target = child;
      child = target * 2 + 1;
    }
  }
  return ary
}

module.exports.sort = sort
