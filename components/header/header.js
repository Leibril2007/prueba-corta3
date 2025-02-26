function mostrarMenu(){

    let header = document.createElement('header');
    header.className = "header";
    
    let logo = document.createElement('img');
    logo.className = "logo-header";
    logo.src = "https://cdn-icons-png.flaticon.com/512/5532/5532750.png";
    logo.alt = "logo";

    let contNumTit = document.createElement('div');
    contNumTit.className = "con-NumTit";

    let titulo = document.createElement('h1');
    titulo.className = "titulo-header";
    titulo.textContent = "Productos marcados";

    let num = document.createElement('div');
    num.className = "circulo-header";
    num.textContent = contador;

    contNumTit.appendChild(titulo);
    contNumTit.appendChild(num);


    header.appendChild(logo);
    header.appendChild(contNumTit);

    return header;

}

let contador = 0;

function contarProductos(carrito){

    let num = document.querySelector(".circulo-header");
    num.textContent = carrito.length;

}



export {mostrarMenu, contarProductos};