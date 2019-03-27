//Import data structure
var UnionFind = require('union-find')
let fs = require('fs');

let data = fs.readFileSync('test2.txt', 'utf-8');

let array = data.split('\n').slice(1);

let edges = array.map(function(n) {
  return n
});


const VERTEX_COUNT = data.split('\n')[0].split(' ')[0];

console.log(VERTEX_COUNT);


console.log(edges);

//Link all the nodes together
var forest = new UnionFind(VERTEX_COUNT);
for(var i=0; i<edges.length; ++i) {
  if (!forest.find(edges[i])) {
    console.log(forest.find(edges[i]))
    forest.link(i, edges[i])
  }
}

console.log(forest.length)