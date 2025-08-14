// operators

let fl=5.2;
let area=22/7*fl**2;
console.log(area);   // there is precision error here 

// Bodmas
console.log(10+3*5-12/3);
console.log(10/5*2*8);

// float point precision 
console.log(0.1+0.2);
console.log(0.1*0.2);
console.log(0.1/0.2);
console.log(0.1**0.2);
console.log(0.1-0.2);
console.log(0.1%0.2);

//infinity
console.log(10/0);
console.log(true/null);
console.log(undefined/null);
console.log(7/undefined);

//strings with arithmetic operators 
console.log("10"+20+55*2+'8');
console.log("10"+20+55-2+'8');
console.log("Z"-32);

// Assignment operators 

let num=10;
num += num *= 2;
console.log(num);


//comparing the single line expression and multiple line expression , which are almost same in the expression wise but not answers 
let div=100;
div /= div /= 5;
console.log(div);

let mul=100;
mul /= 5;
mul /= mul;
console.log(mul);

// comparision operators 
console.log(1 == true);   
console.log('1' == true);

console.log(1 == '1');
console.log(1 === true);

console.log(0 == null);
console.log(undefined == null);
console.log(null == "0");
console.log(null == false)

// NaN is not equal to anything and itself too 
console.log(undefined == NaN);
console.log(undefined)
console.log(("abc" - 10) == NaN);
console.log('abc' -10);
console.log("---------------------------------------------------------");

// strings with strings comparision
console.log('abc' < 'bva');       // compares letter my letters if any one letter gets true with the given condition then result will be true and it wont check further characters 
console.log('abc' < '10');
console.log('100' >'20');
console.log('abc' < 'b10');
console.log('10' >= 10);
console.log("-----------------------------------------------")
console.log('1' >= true);
console.log('0' >= null);
console.log('1' >= undefined);
console.log(null > undefined);
console.log(null >= undefined);