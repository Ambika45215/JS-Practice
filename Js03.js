//let var and const 

var gv = "global var";
// var gv="global var 1";   No error is showing Re-declaration is possible
let gl = "global let";
// let gl="global let 1";    Error is showing Re-declaration not possible
const gc = "global const";
//const gc="gggg";             //same as let

// const gcc;
// gcc="Initialization should be at the time of declaration";

console.log(gv);
console.log(gl);
console.log(gc);

//Functinal scope or local scope

function name() {
    console.log(gv);
    console.log(gl);
    console.log(gc);
    var fv = "function var";
    let fl = "function let";
    const fc = "function const";
    console.log(fv);
    console.log(fl);
    console.log(fc);
    function child() {
        var ffv = "function in function var";
    }
    child()
    // console.log(ffv);
}

name()
// console.log(fv);
// console.log(fl);
// console.log(fc);

//block scope

{
    console.log(gv);
    console.log(gl);
    console.log(gc);
    var bv = "block var";
    let bl = "block let";
    const bc = "block const";
    console.log(bv);
    console.log(bl);
    console.log(bc);

    {
        var bbv="block in block var";
        let bbl="block in block let";
        const bbc="block in block const";
    }
    console.log(bbv);
    // console.log(bbl);
    // console.log(bbc);
}

console.log(bv);
// console.log(bl);
// console.log(bc);


console.log("--------------------------------------------------------------------------");

{
    var pv="parent var";
    {
        var cv="child var";
        {
            var gcv="grand child var";
            console.log(pv);
            console.log(cv);
        }
        console.log(gcv);
    }
}


