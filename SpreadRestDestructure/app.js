// spread operator : coverts array and objects to individual values

const arr1 =[1,2,30];
const newarr=[...arr1,4,5,6]
console.log(newarr)

// destructuring
const arr = [1,2,3,4,5];
const [a,b,c,d,e,f] = arr;
console.log(f)  //undefined 

const obj={
    name :'ambika',
    age:21,
    native:'guntur'
}

const {name,native}=obj;
console.log(name)
console.log(native)

// rest - individual values to a grp of array or objects 

const [g,...rest]=arr
console.log(rest)