//Registration 

// regex for registration 

let firstName = document.getElementById('FirstName');
let lastName = document.getElementById('LastName');
let mail = document.getElementById('mail');
let pswd = document.getElementById('psw');
let cpswd = document.getElementById('cpsw');

//local storage saving in array of objects 
let details = JSON.parse(localStorage.getItem('Users')) || []
let obj = { FName: '', LName: '', Mail: '', Psw: '' }

// checking each input field one by one after entering the details (function in function callback)

document.querySelectorAll('input').forEach((each_input) => {
    // each_input.onfocus = () => each_input.classList.add("border-green-600")
    each_input.onblur = () => validateForm(each_input)
});

// function to validate the entered inputs

function validateForm(entered_inputs) {
    let value = entered_inputs.value.trim();
    if (entered_inputs.id === 'FirstName') {
        const r_firstName = /^[a-zA-Z]+$/;
        if (!r_firstName.test(value)) {
            entered_inputs.classList.add('border-red-600')
            entered_inputs.nextElementSibling.innerText = `*Please enter valid name`;
        }
        else {
            entered_inputs.classList.remove('border-red-600')
            entered_inputs.nextElementSibling.innerText = ``;
        }
    }
    else if (entered_inputs.id === 'LastName') {
        const r_lastName = /^[a-zA-Z]+$/;
        if (!r_lastName.test(value)) {
            entered_inputs.classList.add('border-red-600')
            entered_inputs.nextElementSibling.innerText = `*Please enter valid name`;
        }
        else {
            entered_inputs.classList.remove('border-red-600')
            entered_inputs.nextElementSibling.innerText = ``;
        }
    }
    else if (entered_inputs.id == 'mail') {
        const r_mail = /^[a-zA-Z0-9._]+@[a-z]{3,}\.[a-z]{2,}$/;
        if (!r_mail.test(value)) {
            entered_inputs.classList.add('border-red-600')
            entered_inputs.nextElementSibling.innerText = `*Please enter valid mail`;
        }
        else {
            entered_inputs.classList.remove('border-red-600')
            entered_inputs.nextElementSibling.innerText = ``;
        }
    }
    else if (entered_inputs.id == 'psw') {
        const r_pswd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[._@])[a-zA-Z0-9._@]{8,}$/;
        if (!r_pswd.test(value)) {
            entered_inputs.classList.add('border-red-600')
            entered_inputs.nextElementSibling.innerText = `*Please enter valid password`;
        }
        else {
            entered_inputs.classList.remove('border-red-600')
            entered_inputs.nextElementSibling.innerText = ``;
        }
    }
    else if (entered_inputs.id == 'cpsw') {
        if (value === pswd.value && value !== '') {
            entered_inputs.classList.remove('border-red-600')
            entered_inputs.nextElementSibling.innerText = ''
        }
        else {
            entered_inputs.classList.add('border-red-600')
            entered_inputs.nextElementSibling.innerText = '*Password did not match'
        }
    }
}

document.getElementById('myForm').addEventListener('click', function (e) {
    let errors = document.querySelectorAll('.text-red-600');
    let haserror = false

    for (let i = 0; i < errors.length; i++) {
        if (errors[i].innerText !== '') {
            haserror = true
            break
        }
    }

    if (haserror) {
        e.preventDefault();
        alert("Please fix errors")
    }
    else {
        alert("form is submitted")

        obj.FName = firstName.value
        obj.LName = lastName.value
        obj.Mail = mail.value
        obj.Psw = pswd.value

        details.push(obj)
        localStorage.setItem('Users', JSON.stringify(details))
    }
})



