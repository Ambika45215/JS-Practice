//individual detailes page


// already defined in api.js file so no need again 
// const apiFetch = "https://dummyjson.com/products";

// to get id from url 

const url = new URLSearchParams(window.location.search);

let id = url.get('id')
let individualApi = apiFetch + '/' + id ;
console.log(individualApi)


fetch(individualApi).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    // data is object 
    document.head.getElementsByTagName('title')[0].innerText = `${data.title    }`
    
    document.getElementById('left').innerHTML =`
    <div> <img src="${data.thumbnail}" alt="${data.title}" class="w-150 h-150"> </div>
    ` 
    document.getElementById('right').innerHTML =`
    <div class="my-2 p-3"> 
        <p class="text-2xl font-semibold">${data.title}</p>
        <p class="text-base text-gray-600">${data.description}</p>
        <p class="text-sm"><span class="text-blue-600">Brand:</span> ${data.brand}</p>
        <p class="text-base">Rating: ${data.rating}</p>
        <hr class ="mt-3 w-200 mr-auto">
    </div>
    <div class="mb-2 px-3">
        <span class="border-2 p-1 border-red-600 bg-red-600 text-white rounded-sm">Limited Time Deal </span>
        <p class="my-2">
        <span class="text-xl text-red-600 mr-2">-${data.discountPercentage}%</span>
        <span class="text-xl"><sup>$</sup>(${Math.round(data.price-data.price*data.discountPercentage*0.01)})</span>
        </p>
        <p class="text-base text-gray-400">M.R.P : <sup>$</sup> <s>${data.price}</s></p>
        <p class="text-lg">${data.returnPolicy}</p>
    </div>
    `
})