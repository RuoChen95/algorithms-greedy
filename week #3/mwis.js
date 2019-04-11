// 数据获取
let fs = require('fs');
// let data = fs.readFileSync('mwisTest.txt', 'utf-8');
let data = fs.readFileSync('mwis.txt', 'utf-8');
let array = data.split('\n');
array = array.map(function(n) {
    return parseInt(n)
});

console.log(array);

memoizationArray = [];

function divide(C) {

    if (typeof memoizationArray[C.length] != 'undefined') {
        return memoizationArray[C.length]
    }

    if (C.length <= 2 ) {
        if (C.length == 1) {
            memoizationArray[1] = C[0]
            return C[0]
        }
        if (C[0] > C[1]) {
            memoizationArray[2] = C[0]
            return C[0]
        } else {
            memoizationArray[2] = C[1]
            return C[1]
        }
    }

    let S1 = divide(C.slice(0, C.length - 1));
    let S2 = divide(C.slice(0, C.length - 2));

    if (S1 > (S2 + C[C.length - 1])) {
        // console.log(C, S1);
        memoizationArray[C.length] = S1;
        return S1
    } else {
        // console.log(C, S2 + C[C.length - 1]);
        memoizationArray[C.length] = S2 + C[C.length - 1];
        return S2 + C[C.length - 1]
    }
}
console.time('time');
let results = divide(array);
console.log(results);
console.timeEnd('time');

let A = memoizationArray.slice(1);


let i = A.length;

let list = [];

A[-1] = 0;
while(i >= 1) {
    if (A[i-2] > A[i-3] + array[i-1]) {
        i--
    } else {
        list.push(i);
        i = i - 2
    }
}


let question = [1,2,3,4,17,117,517,997];
let answer = '';
question.forEach(function(n) {
    if (list.indexOf(n) != '-1') {
        answer += '1'
    } else {
        answer += '0'
    }
});

console.log(answer);