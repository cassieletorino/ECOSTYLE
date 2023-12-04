function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function openModal1() {
    document.getElementById('modal1').style.display = 'flex';
}

function closeModal1() {
    document.getElementById('modal1').style.display = 'none';
}

function openModalRec() {
    document.getElementById('modalrec').style.display = 'flex';
}

function closeModalRec() {
    document.getElementById('modalrec').style.display = 'none';
}

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//Listagem dos produtos
modeloJson.map((peruca, index) => {
    let modeloPeruca = c('.loja-peruca .peruca').cloneNode(true);

    modeloPeruca.querySelector('.peruca-img img').src = peruca.img;
    modeloPeruca.querySelector('.peruca-name').innerHTML = peruca.name;
    modeloPeruca.querySelector('.peruca-price').innerHTML = peruca.price;
    modeloPeruca.querySelector('.peruca a').href = peruca.link;
    
    c('.peruca-area').append(modeloPeruca);
});