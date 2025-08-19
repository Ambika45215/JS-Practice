// nested if else

let gen="Male";
let age=21;

if (gen=="male" || gen=="Male"){
    if (age >= 21){
        console.log("He is eligible for marriage");
    }
    else{
        console.log("He is Not eglible for marriage");
    }
}
else{
    if(age >=18){
        console.log("She is eligible for marriage");
    }
    else{
        console.log("She is not eligible for marriage");
    }
}

let result=(gen=="male" || gen=="Male") ? ((age >=21) ? "He is eligible for marriage" : "He is not eligible for marriage") : ((age >= 18) ? "She is eligibel for marriage" : "She is not eligible for marriage");

console.log(result);