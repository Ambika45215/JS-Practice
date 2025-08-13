// Data types 

let num=100;
let int=100.00;
console.log(num==int)
console.log(typeof num);

let str="ambika";
let str1='Ambika';
let str2=`shiva`;
console.log(str==str1);
console.log(str==str2);
console.log(typeof str);

console.log(55>=15);
console.log('a'=='A');
console.log(typeof (55>=15));

let a=null;
console.log(typeof a);

let b;
console.log(b);
console.log(typeof b);


let c=Symbol('abc');
console.log(typeof c);
let d=Symbol(num);
let e=Symbol(str);
let f=Symbol(a);
let g=Symbol(b);
// let h=Symbol(c);

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
// console.log(h);


//value is copied 
let num1=100;
let num2=num1;
num2+=1;
console.log(num1,num2);

//value is taken by reference ,meaning no copying take address of actual value and so whatever changes done applies to actual value
let array=[100,200,300,400,500];
let array1=array;
array1[0]+=1;
array1[1]+=1;
array1[2]+=1;
array1[3]+=1;
array1[4]+=1;
console.log(array,array1);

let array2=[100,'string',true,null, , Symbol(12)];
console.log(typeof array2)
console.log(typeof array2[0])
console.log(typeof array2[1])
console.log(typeof array2[2])
console.log(typeof array2[3])
console.log(typeof array2[4])
console.log(typeof array2[5])

let obj={
    name:"ambika",
    age:21,
    rollNo:210303107007,
    Cgpa:7.9
}

console.log(obj.age);
console.log(obj);