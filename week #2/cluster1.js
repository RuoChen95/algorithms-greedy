let fs = require('fs');

// let data = fs.readFileSync('test1.txt', 'utf-8');
let data = fs.readFileSync('clustering1.txt', 'utf-8');

let array = data.split('\n').slice(1);

let inputEdges = array.map(function(n) {
  return n.split(' ').map(function (n) {
    return parseInt(n)
  })
});


let inputV = [];
inputEdges.forEach(function(n) {
  if (inputV.indexOf(n[0]) == -1) {
    inputV.push(n[0])
  }
  if (inputV.indexOf(n[1]) == -1) {
    inputV.push(n[1])
  }
});

inputEdges.sort(function(a, b) {
  return a[2] - b[2]
});

const K = 4;

function contract(vertices, edges) {
  if (vertices.length > K) {
    let ind = 0;

    let u = edges[ind][0];
    let v = edges[ind][1];

    vertices.splice(vertices.indexOf(v), 1);

    let newList = [];

    edges.splice(ind, 1);

    for (let i = 0; i < edges.length; i++) {
      if (edges[i][0] == v) edges[i][0] = u;
      if (edges[i][1] == v) edges[i][1] = u;
      if (edges[i][0] !== edges[i][1]) newList.push(edges[i]) //去除self-loop
    }

    return contract(vertices, newList)
  } else {
    return edges
  }
}

console.log(contract(inputV, inputEdges)[0][2]);