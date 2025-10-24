// localStorage.clear()


let aun = JSON.parse(localStorage.getItem("Details")) || [];
let auno = { name: '', psw: '' };

function save() {
    let au = document.getElementById("mail").value;
    let ap = document.getElementById("passWord").value;

    auno.name = au;
    auno.psw = ap;

    aun.push(auno)

    localStorage.setItem("Details", JSON.stringify(aun));
}

function check() {
    let bu = document.getElementById("userName").value;
    let bp = document.getElementById("lpsw").value;

    for (let i = 0; i < aun.length; i++) {
        if (aun[i].name == bu && aun[i].psw == bp) {
            alert("login successful");
            break;
        }
        else if (i == aun.length - 1) {
            alert("Invalid details");
        }
    }
}


// dark and light mode

// function dark(){
//     document.body.className ='bg-black text-white overflow-hidden'
// }
// function light(){
//     document.body.className ='bg-white text-black overflow-hidden'
// }

function mode() {
    // let c = document.body.className;
    dark = "bg-black text-white overflow-hidden";
    light = "bg-white text-black overflow-hidden";
    if ("bg-white text-black overflow-hidden" == light) {
        document.body.className(dark);
    }
    else{
        document.body.className(light);
    }   
}