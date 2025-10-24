// array

let user = JSON.parse(localStorage.getItem("UN")) || [];    //becoz page reloads everytime we we hit sign up submit button 
let psw = JSON.parse(localStorage.getItem("PSW")) || [];

function save() {
    let au = document.getElementById("mail").value;
    let ap = document.getElementById("passWord").value;

    user.push(au);
    psw.push(ap);

    localStorage.setItem("UN", JSON.stringify(user));
    localStorage.setItem("PSW", JSON.stringify(psw));

}

function check() {
    let bu = document.getElementById("userName").value;
    let bp = document.getElementById("lpsw").value;

    for (let i = 0; i < user.length; i++) {
        if (user[i] == bu && psw[i] == bp) {
            alert("login successful")
            break;
        }
        else if (i == (user.length) - 1) {
            alert("invalid details")
        }
    }
}
