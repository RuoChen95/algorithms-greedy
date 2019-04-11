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

let maxWeight = array[0][0];