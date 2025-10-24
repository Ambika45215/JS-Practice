let mainBy = document.getElementById("mainBody");

if(localStorage.getItem("Theme")==="light"){
    mainBy.classList.replace("bg-gray-800","bg-white");
    mainBy.classList.replace("text-white","text-black");
    localStorage.setItem("Theme","light");
}

function toggleButton(){
    if(localStorage.getItem("Theme") === "light"){
        mainBy.classList.replace("bg-black","bg-gray-800");
        mainBy.classList.replace("text-white","text-black");
        localStorage.setItem("Theme","dark");
    }
    else{
        mainBy.classList.replace("bg-gray-800","bg-white");
        mainBy.classList.replace("text-white","text-black");
        localStorage.setItem("Theme","light");
    }
}