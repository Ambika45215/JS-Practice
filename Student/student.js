// to-do list type

let studentName = JSON.parse(localStorage.getItem("Name")) || [];
let studentSubject = JSON.parse(localStorage.getItem("Subject")) || [];
let studentMarks = JSON.parse(localStorage.getItem("Marks")) || [];

const sl = document.getElementById("studentList");
let a = studentName.length;

window.onload = function () {
    for (let i = 0; i < studentName.length; i++) {
        sl.innerHTML += `<p>${i + 1}. ${studentName[i]} - ${studentSubject[i]} - ${studentMarks[i]}</p>`;
    }

    let high = 0;
    let index = 0;
    for (let i = 0; i < studentName.length; i++) {
        if (high <= studentMarks[i]) {
            high = studentMarks[i];
            index = i;
        }
    }

    //average
    let average = 0;
    for (let j = 0; j < studentMarks.length; j++) {
        average = average + studentMarks[j];
    }
    average = average / a;
    document.getElementById("displayName").innerText = a;
    document.getElementById("displayAvg").innerText = average;
    document.getElementById("displayTop").innerText = studentName[index];
};

function onAdd() {
    let name = document.getElementById("name").value;
    let sub = document.getElementById("subject").value;
    let marks = Number(document.getElementById("marks").value);

    studentName.push(name);
    studentSubject.push(sub);
    studentMarks.push(marks);

    localStorage.setItem("Name", JSON.stringify(studentName))
    localStorage.setItem("Subject", JSON.stringify(studentSubject))
    localStorage.setItem("Marks", JSON.stringify(studentMarks))

    listing();
}

function listing() {
    let sl = document.getElementById("studentList");
    sl.innerHTML += `<p>${a}. ${studentName[a - 1]} - ${studentSubject[a - 1]} - ${studentMarks[a - 1]}</p>`

}
// localStorage.clear()