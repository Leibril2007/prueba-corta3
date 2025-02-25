import { mostrarMenu } from "./components/header/header.js";

let DOM = document.querySelector("#root");

function iniciarApp(){

    let contenedor = document.createElement('div');

    contenedor.appendChild(mostrarMenu());

    return contenedor;
}

DOM.appendChild(iniciarApp());
