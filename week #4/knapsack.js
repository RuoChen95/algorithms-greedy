// 数据输入
let fs = require('fs');
let data = fs.readFileSync('test.txt', 'utf-8');
let array = data.split('\n');
array = array.map(function(n) {
  return n.split(' ').map(function(n) {
    return parseInt(n)
  })
});

let vw = array.slice(1);
let W = array[0][0]; // max weight sum
let Y = array[0][1]; // 可选物品的数量
let V = 0; // value of best solution

console.log(W, vw.length);



//动态规划
let A = [];
for (let i = 0; i <= Y; i++) {
  A[i] = [];
}
for(let i = 0; i <= W; i++) {
  A[0][i] = 0
}
console.log(A);
for (let i = 1; i <= Y; i++) {
  for (let x = 0; x <= W; i++) {
    console.log(vw);
    A[i][x] = Math.max(A[i-1][x], A[i-1][x-vw[i][1]] + vw[i][0])
  }
}



// 数据输出
