let fs = require('fs');

// let data = fs.readFileSync('testcase_jobs.txt', 'utf-8'); // 32104
let data = fs.readFileSync('jobs.txt', 'utf-8');

let array = data.split('\n').slice(1);

let inputArray = array.map(function(n) {
  return n.split(' ').map(function (n) {
    return parseInt(n)
  })
});


inputArray.sort(function(a, b) {
  return  (b[0] / b[1]) - (a[0] / a[1])
})

// console.log(inputArray);

let time = 0;
let weight = 0;
let length = 0;

inputArray.forEach(function(n, index, array) {
  weight = n[0];
  length += n[1];


  time += weight * length
})

console.log(time);