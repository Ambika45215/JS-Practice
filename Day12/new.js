let array = [
    { name: "Watch", price: 15, image: "https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2014_rosegold.jpg?v=1696691332&width=2400", description: "This watch really suits you" },
    { name: "iPhone16", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1j03skiuQfP12_k1PSioLUD_C2jwItezhOw&s", description: "Dont buy,waste of money!" },
    { name: "Kurti", price: 2, image: "https://media.shopkund.com/media/catalog/product/cache/9b8fb9a78b48ba20857a65111a93b65e/p/r/prt12333_2_black-georgette-embroidered-straight-kurti-with-dupatta-kti2098.jpg", description: "If you dont buy you gonna regret it!" },
    { name: "Chain", price: 8, image: "https://www.chidambaramgoldcovering.com/image/cache/catalog/ChidambaramGoldCovering/dollar-chain/bgdr1222-latest-ruby-white-stone-one-gram-gold-dollar-slim-chain-shop-online-1-850x1000.jpg", description: "This chain took birth just for you,buy it Asap before someone steals it" }
];

let a=document.getElementById("container");

for(let i=0; i<array.length; i++){
    a.innerHTML += `<div class="cards"><img src="${array[i].image}"><p>${array[i].name}</p><p><b>Price:</b>$${array[i].price}</p><p><b>Description:</b>${array[i].description}</p></div>`;
}