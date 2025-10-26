// fetch api

const apiFetch = "https://dummyjson.com/products";

// fetch retruns a promise that represents the network request
// if succeds,the promise is resolved with a response 
// if fails, the promise is rejected with an error
fetch(apiFetch)
    .then((response) => {
        return response.json()
        //The arrow function gets the Response from fetch().
        //response.json() itself returns another Promise — because reading and parsing JSON is asynchronous.
    })
    .then((data) => {
        // This runs only after the previous .then() resolves (i.e., after JSON parsing finishes).
        // The argument data here is the parsed JSON returned by response.json().
        console.log(data)
        let p_details = data.products;
        p_details.forEach((e) => {
            document.getElementById('products').innerHTML +=
                `<div  class="detailedPage border-2 bg-white border-white w-60 h-55  shadow-2xl p-4 rounded-lg flex flex-col items-center cursor-pointer" onclick ="info(${e.id})">
            <img src="${e.thumbnail}" alt="${e.title}" class="w-50 h-30">
            <p class="font-semibold text-center">${e.title}</p>
            <p class="mt-2">Price: $ ${e.price}</p>
        </div>`
        })

        // this is a function and i cannot access the data or p_details from outside.
        localStorage.setItem('Length', data.products.length)
    })
    .catch((reject) => {
        // This runs if any promise in the chain rejects, including:
        // The fetch() itself (e.g., network error)
        // The response.json() step (e.g., invalid JSON)
        // So .catch() acts like a global error handler for the whole chain above it.
        console.log("An error occured in fetching the api")
    })


function info(e) {
    window.location.href = `./descp.html?id=${e}`;
    // window.open("./descp.html")
    // let id_limit = localStorage.getItem('Length')
    // console.log(e)
    // console.log(apiFetch + '/' + e)

    // let id_url = apiFetch + '/' + e;
    // fetch(id_url).then((response) => {
    //     return response.json();
    // }).then((data) => {
    //     console.log(data)
    //     document.getElementById('left').innerHTML = `<img src="${data.thumbnail}" alt="${data.title}">`
    // }).catch((error) => {
    //     console.log("An error occured in fetching the api");
    // })
}
