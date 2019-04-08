// 数据获取
let fs = require('fs');
let data = fs.readFileSync('mwisTest.txt', 'utf-8');
// let data = fs.readFileSync('huffman.txt', 'utf-8');
let array = data.split('\n');
array = array.map(function(n) {
    return parseInt(n)
});

let A = array.slice(0);
let S = [];
A[0] = 0;
A[-1] = 0;

let i = A.length;
while (i > 1) {
    if (A[i-1] >= A[i-2] + array[i]) {
        i = i - 1
    } else {
        S.push(i);
        i = i - 2
    }
}

// 答案
console.log(S);
// [0, 1, 2, 3, 16, 116, 516, 996].forEach(function(n) {
//     console.log(S.indexOf(n));
// });
sum = 0
S.forEach(function(n) {
    sum+=array[n-1]
})
console.log(sum)