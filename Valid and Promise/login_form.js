let details = JSON.parse(localStorage.getItem('Users')) || []

function check() {
    let l_userName = document.getElementById("l-mail").value;
    let l_pswd = document.getElementById("l-psw").value;

    let promise = false
    let index;
    for (let i = 0; i < details.length; i++) {
        if (details[i].Mail === l_userName && details[i].Psw === l_pswd) {
            promise = true
            index = i
            break
        }
    }

    // creating promise
    let login_promise = new Promise((resolve, reject) => {
        if (promise) {
            resolve(`Hii ${details[index].FName},
                You have successfully logged into your account.If it is not you report it immediately.
                Thank You
                Best Regards
                Login System`)
        }
        else {
            reject("Login failed, Invalid username or password")
        }
    })

    // consuming promise
    login_promise.
        then(message => {
            console.log(message);
            alert(message)
        })
        .catch(message => {
            console.log(message);
            alert(message)
        })
        .finally(() => {
            document.getElementById("l-mail").value = "";
            document.getElementById("l-psw").value = "";
        });
}