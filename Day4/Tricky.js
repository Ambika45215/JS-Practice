// data types as operands with operators 

let str="10";
let num=7;
let num1=7.7;
let n=null;
let t=true;
let f=false;
let u;
let s=Symbol('abc');


// With string + operator
console.log(str + num);
console.log(str + num1);
console.log(str + n);
console.log(str + t);
console.log(str + f);
console.log(str + u);
// console.log(str + s);

// string with other operators 
console.log(str * num);
console.log(str * num1);
console.log(str * n);
console.log(str * t);
console.log(str * f);
console.log(str * u);

//with number
console.log(num +1);
console.log(num +num1);
console.log(num +n);
console.log(num +t);
console.log(num +f);
console.log(num +u);
// console.log(num +s);

//with boolean
console.log(t +f);
console.log(t +t);
console.log(t +n);
console.log(t +u);

console.log(n+u);