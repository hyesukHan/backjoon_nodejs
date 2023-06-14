const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);

const x = B%10;
const y = Math.floor((B/10)%10);
const z = Math.floor(B/100);

console.log(A*x);
console.log(A*y);
console.log(A*z);
console.log(A*B);