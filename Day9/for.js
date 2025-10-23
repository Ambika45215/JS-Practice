// for loop

//right otp ,only three attempts

let otp=1234;

for(let i=1; i<=3; i++){
    let user=Number(prompt("enter otp"));
    if(user == otp){
        console.log("otp is right");
        break;
    }
    else{
        if (i ==3 ){
            console.log("invalid otp accessed denied");
        }
        else{
            console.log(`invalid otp try again and u completed ${i} attempts in total 3`);
        }
    }
}

// curly braces

// for(let i=100; i<=100; i++)
//     console.log(i);      // prints 100
// // console.log(i);

// for(let i=100; i<=100; i++);
//     // console.log(i);     // error


// // invalid cases

// // became infinite loop because there is no increment option and condition is always true

// for(let i=100; i<=100; console.log("hello")){
//     console.log(i);
// }

// i got incremented and loop got exited 

// for(let i=100; i<=100; console.log("hello")){
//     console.log(i);
//     i++;
// }

// for(console.log("hello"); i<=100; i++){   // error in this line , i is not defined 
//     // console.log(i);
//     // console.log("hello...........");
// }


// for(console.log("hello"); ;){   // no condition no increment /decrement loop became infinte   
//     console.log("hiii");
// }

// for(let i=0; !1;i++){
//     console.log("false condition");
// }

// for(let i=0;i<=5;false){
//     console.log("increment condition");   //infinite loop
// }  


