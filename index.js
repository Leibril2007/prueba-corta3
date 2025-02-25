import { mostrarMenu } from "./components/header/header.js";
import { cargarProductos } from "./components/catalogo/catalogo.js";

let DOM = document.querySelector("#root");

function iniciarApp(){

    DOM.appendChild(mostrarMenu());
    DOM.appendChild(cargarProductos());
    
}

DOM.appendChild(iniciarApp());
