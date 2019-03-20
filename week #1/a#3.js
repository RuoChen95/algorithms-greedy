let fs = require('fs');
let Heap = require('heap');

// let data = fs.readFileSync('testcase_edges.txt', 'utf-8'); // 3
let data = fs.readFileSync('edges.txt', 'utf-8');

let array = data.split('\n').slice(1);

let inputEdges = array.map(function(n) {
  return n.split(' ').map(function (n) {
    return parseInt(n)
  })
});

// console.log(inputEdges);

let inputV = [];
inputEdges.forEach(function(n) {
  if (inputV.indexOf(n[0]) == -1) {
    inputV.push(n[0])
  }
  if (inputV.indexOf(n[1]) == -1) {
    inputV.push(n[1])
  }
});

let heap = new Heap(function(a, b) {
  return a[2] - b[2];
});

let x = [inputV[0]];
let edge = [];
let cost = 0;

while(x.length != inputV.length) {
  for (let i = 0; i < inputEdges.length; i++) {
    if (x.indexOf(inputEdges[i][0]) >= 0 && x.indexOf(inputEdges[i][1]) === -1 ||
      x.indexOf(inputEdges[i][1]) >= 0 && x.indexOf(inputEdges[i][0]) === -1) {
      heap.push(inputEdges[i])
    }
  }
  edge = heap.peek();
  // console.log(edge);
  if (x.indexOf(edge[0]) == -1) {
    x.push(edge[0])
  } else {
    x.push(edge[1])
  }

  cost += edge[2];

  heap = new Heap(function(a, b) {
    return a[2] - b[2];
  });
}

console.log(cost);