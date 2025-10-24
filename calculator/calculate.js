// calculator

let keys = ['AC', '&rarr;', '+/-', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '%', '0', '.', '='];
let keyOperators = ['AC', '&rarr;', '+/-', '/', '*', '-', '+', '='];

let dis = document.getElementById("display");

// loop for displaying operators and operands

for (let i = 0; i < keys.length; i++) {
    //  create button
    let but = document.createElement("button");
    but.className = "w-16 h-16 text-xl rounded-full font-bold cursor-pointer bg-black text-white hover:bg-gray-600";
    but.innerHTML = keys[i];
    document.getElementById("operandsAndNumbers").appendChild(but);

    // Events listener (click)

    if(keys[i] == 'AC'){
        but.addEventListener("click",() => clear());
    }
    else if(keys[i] == '='){
        but.addEventListener("click",()=> calculation());
    }
    else{
        but.addEventListener("click", () => displayKeys(keys[i]));
    }

    // check if opeartor  and change color 
    if (keyOperators.includes(keys[i])) {
        but.classList.add("bg-orange-400");
    }
}

// event listener function , onlick add the respective number or operator

function displayKeys(x) {
    dis.value += x;
    //An <input> (or <textarea>) does not use innerText or innerHTML to show what’s inside.
    // Instead, its contents are stored in the value property.
}

// function for calculation
function calculation() {
    dis.value = eval(dis.value);
}

// for clearing

function clear() {
    dis.value = "";
}