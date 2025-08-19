// some questions on operators and data types 

console.log(1 + "2");        // ?  
console.log("2" - 1);        // ?
console.log("2" * "3");      // ?
console.log("2" / "3");      // ?
console.log(4 + 3 + "5");    // ?
console.log();

//unary plus
console.log(+"5");       // ?
console.log(+"");        // ?
console.log(+"abc");     // ?
console.log(+true);      // ?
console.log(+false);     // ?
console.log();

// increment and decrement
let x = 5;
console.log(x++);   // ?
console.log(++x);   // ?
x = "5";
console.log(++x);   // ?
console.log();

//null special rule
console.log(null + 1);       // ?
console.log(undefined + 1);  // ?
console.log(null == 0);      // ?
console.log(null >= 0);      // ?
console.log(null > 0);       // ?
console.log();

// chained comparisons 
console.log(1 > 2 < 3 > 0);
console.log(1 > 2 < 3 > 0 < 'a01');   // a01 gives NaN so false output
console.log(1 > 2 < 3 > 0 < false);  
console.log(1 > 2 < 3 < 0 >= null);
console.log(1 > 2 < 3 < 0 >= undefined);  // here too NaN occurs due to undefinied so false 
console.log('abc' > 'cea' <'10');
// NaN as any one of the operand with comparison operator then result will be false 

console.log();
console.log(null === undefined);
console.log(null == undefined);
console.log(null != undefined);
console.log(null != 1);
console.log(false != "ab");
console.log(true != "ab");
console.log(true == "ab");
console.log(undefined != "ab");
console.log(undefined == "ab");
console.log();


console.log(1 / 0);         // ?
console.log(-1 / 0);        // ?
console.log(0 / 0);         // ?
console.log(0 / -0);        // ?
console.log(-0 / 0);        // ?
console.log(-0 / -0);        // ?

// NaN with NaN 
console.log("")
console.log(NaN == NaN);
console.log(NaN == true);
console.log(NaN == false);
console.log(NaN != NaN);
console.log(NaN != true);
console.log(NaN != false);
