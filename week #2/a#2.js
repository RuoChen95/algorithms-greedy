//Import data structure
var UnionFind = require('union-find')
let fs = require('fs');

let data = fs.readFileSync('clustering2.txt', 'utf-8');
// let data = fs.readFileSync('test2.txt', 'utf-8');

let array = data.split('\n').slice(1);

let edges = array.map(function(n, index) {
  return n.split(' ').slice(0, -1).map(function (n) {
    return parseInt(n)
  })
});

function hamming_distance(x, y) {
  let distance = 0;
  x.forEach(function(n, index) {
    if(n != y[index]) distance++
  })
  console.log(x, y, distance);
  return distance
}

console.log(edges);


// newEdges = [];
//
// edges.forEach(function(n) {
//   if (newEdges.indexOf(n) == -1) {
//     newEdges.push(n)
//   }
// });
//
// newEdges.sort();
//
// console.log(newEdges);