//login form and signup form 

function save(){
    localStorage.setItem("User Name",document.getElementById("mail").value);
    localStorage.setItem("Password",document.getElementById("passWord").value);
}

function check(){
    let un=localStorage.getItem("User Name");
    let pw=localStorage.getItem("Password");
    
    let lun=document.getElementById("userName").value
    let lpw=document.getElementById("lpassWord").value

    if(un == lun && pw==lpw){
        alert("Login Successful");
    }
    else{
        alert("Invalid Details")
    }
}