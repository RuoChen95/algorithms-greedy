// 数据获取
let fs = require('fs');
let data = fs.readFileSync('huffman.txt', 'utf-8');
let array = data.split('\n');
array = array.map(function(n) {
    return parseInt(n)
});

// 点定义
function Node(freq) {
    this.freq = freq;
    this.left = this.right = this.father = null;
    this.isLeft = function() {
        return this.father.left == this
    };
    this.isRight = function() {
        return this.father.right == this
    };
}

// 点赋值
let nodes = [];
array.forEach(function(n, index) {
    nodes[index] = new Node(n)
});

// 建立树
let queue = nodes.slice(0);
while (queue.length > 1) {
    queue.sort(function(a, b) {
        return b.freq - a.freq
    })
    let node_left = queue.pop(0);
    let node_right = queue.pop(0);
    let node_father = new Node(node_left.freq + node_right.freq);
    node_father.left = node_left;
    node_father.right = node_right;
    node_left.father = node_father;
    node_right.father = node_father;
    queue.push(node_father);
}
queue[0].father = null;
let root = queue[0];

// 分析树
let codes = [];
nodes.forEach(function(n, index) {
    codes[index] = '';
});
for (let i = 0; i < nodes.length; i++) {
    let node_tmp = nodes[i];
    while(node_tmp != root) {
        if (node_tmp.isLeft()) {
            codes[i] = '0' + codes[i]
        }
        if (node_tmp.isRight()) {
            codes[i] = '1' + codes[i]
        }
        node_tmp = node_tmp.father
    }
}

// 答案
codes.sort(function(a, b) {
    return a.length - b.length
});
console.log(codes.pop().length, codes[0].length);
