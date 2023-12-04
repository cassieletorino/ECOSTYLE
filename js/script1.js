const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modeloJson1.map((cosplay, index) => {
    let modeloCosplay = c('.loja-cosplay .cosplay').cloneNode(true);

    modeloCosplay.querySelector('.cosplay-img img').src = cosplay.img;
    modeloCosplay.querySelector('.cosplay-name').innerHTML = cosplay.name;
    modeloCosplay.querySelector('.cosplay-from').innerHTML = cosplay.from;
    modeloCosplay.querySelector('.cosplay-price').innerHTML = cosplay.price;
    modeloCosplay.querySelector('.cosplay a').href = cosplay.link;
    
    c('.cosplay-area').append(modeloCosplay);
});