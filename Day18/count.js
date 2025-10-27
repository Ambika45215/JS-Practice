// count down for sale 

function countDown() {
    let n = new Date().getTime();
    let nt = new Date("2025-09-12T08:00:00").getTime();

    let milliSeconds = nt - n;
    let totalSeconds = Math.floor(milliSeconds / 1000);

    let days = Math.floor(totalSeconds / (3600 * 24));        //we want days from total hours

    let hours = Math.floor(totalSeconds % (3600 * 24) / 3600);   //we want reaminder of days  which will be in hours

    let minutes = Math.floor(totalSeconds % 3600 / 60);     //we want remainder of hours which will be in hours

    let seconds = totalSeconds % 60;    //we want remiander of minutes

    document.getElementById("count").innerText = `${days}:${hours}:${minutes}:${seconds}`
}

setInterval(countDown, 1000)