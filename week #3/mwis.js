// 数据获取
let fs = require('fs');
let data = fs.readFileSync('mwisTest.txt', 'utf-8');
// let data = fs.readFileSync('huffman.txt', 'utf-8');
let array = data.split('\n');
array = array.map(function(n) {
    return parseInt(n)
});

console.log(array);

function divide(C) {
    console.log(C)

    if (C.length <= 2 ) {
        if (C.length == 1) {
            return C[0]
        }
        if (C[0] > C[1]) {
            return C[0]
        } else {
            return C[1]
        }
    }

    let S1 = divide(C.slice(0, C.length - 1));
    let S2 = divide(C.slice(0, C.length - 2));

    if (S1 > (S2 + C[C.length - 1])) {
        return S1
    } else {
        return S2 + C[C.length - 1]
    }
}


console.log(divide(array));