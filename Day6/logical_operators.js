// logical operators 

console.log(true && "_");
console.log(!"");    // Empty string 
console.log(!" ");    // Space as special character , not empty 
console.log("");

console.log(10 * " ");
console.log(10 * "");
console.log(10 - " ");
console.log(" ");

console.log(true != " ");
console.log(false == " ");
console.log(true != "");  
console.log(false != "");     //false not equal to 0 is false 
console.log(false != "a");  // "a" is converted into number which is NaN 
console.log(true != "a");   // same reason
console.log("------------------------------------------------------------------------------");

// Logical / conditional statments

console.log(!1);
console.log(!0);
console.log(!7);
console.log("");

console.log(!!""); // !! gives the original boolean value of the operand  
console.log(!!" ");   //There is something in the string here it is space a special character and below abc and _ so not converts them to boolean , non-empty string boolean conversion gives true and empty string gives false.
console.log(!!"abc");   
console.log(!!"_");
console.log("");

console.log(!true);
console.log(!false);
console.log("");

console.log(!null);      // null ,undefined and NaN boolean conversion values are false 
console.log(!undefined);
console.log(!NaN);
console.log("-----------------------------------------------");

// // && 

// console.log(null && true);
// console.log(undefined && true);
// console.log(NaN && true);

// console.log(null && false);
// console.log(undefined && false);
// console.log(NaN && false);

// console.log(!null && true);
// console.log(!undefined && true);
// console.log(!NaN && true);
// console.log("----------------------------------------------");

// console.log(true && "");
// console.log(true && "_");
// console.log(true && "abc");
// console.log(true && "10");

// console.log(false && "10");
// console.log("abc" && false);
// console.log("" && false);
// console.log("_" && false);
// console.log("10" && false);

// console.log("abc" && "10");

console.log("----------------------------------------------");
// &&

console.log("" && false);      // gives out first falsy value 
console.log(" " && false);        // if there is none then last operand  
console.log(true && "abc" && 30);
console.log(true && 30 && null && NaN);

// ||

console.log("");
console.log(false || "" || 30);     // gives out first truthy value  , doesn't covert the first truthy value to boolean 
console.log(false || "" || null);  // if there is none then last operand
console.log(false || "abc" || undefined);

// && and ||

console.log("");
console.log("abc" && true && "" || false || null || "xyz");
console.log( !null && "yes" || 0 );
console.log( undefined || "ok" && !"" );
console.log( undefined || "ok" && !!"" );
console.log( 0 && "first" || "second" && false || "third" );
console.log( !(false || 0) && ("A" || "B") );

if ("0" && [] || null) {
  console.log("Condition passed");
} else {
  console.log("Condition failed");
}

console.log("0" || [] && null);    // ! > && >  ||   precedance

let x = "" || 0 || null || "truthy" && undefined;
console.log(x);

console.log( !("hi" && 0) || (false && "yes") );