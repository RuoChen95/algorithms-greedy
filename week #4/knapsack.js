// 数据输入
let fs = require('fs');
let data = fs.readFileSync('test.txt', 'utf-8');
let array = data.split('\n');
array = array.map(function(n) {
  return n.split(' ').map(function(n) {
    return parseInt(n)
  })
});

let goods = [];
array.slice(1).forEach(function(n) {
  goods.push({
    'value': n[0],
    'weight': n[1]
  })
});

console.log(goods);

let weight = array[0][0];

console.log(weight);

memoizationArray = [];

function divide(C) {

  if (typeof memoizationArray[C.length] != 'undefined') {
    return memoizationArray[C.length]
  }

  if (C.length <= 2 ) {
    if (C.length == 1) {
      memoizationArray[1] = C[0].value;
      return C[0].value
    }
    if (C[0] > C[1]) {
      memoizationArray[2] = C[0].value;
      return C[0].value
    } else {
      memoizationArray[2] = C[1].value;
      return C[1].value
    }
  }

  let S1 = divide(C.slice(0, C.length - 1));
  let S2 = divide(C.slice(0, C.length - 2));

  if (S1 > (S2 + C[C.length - 1])) {
    // console.log(C, S1);
    memoizationArray[C.length] = S1;
    return S1
  } else {
    // console.log(C, S2 + C[C.length - 1]);
    memoizationArray[C.length] = S2 + C[C.length - 1];
    return S2 + C[C.length - 1].value
  }
}
console.time('time');
let results = divide(goods);
console.log(results);
console.timeEnd('time');