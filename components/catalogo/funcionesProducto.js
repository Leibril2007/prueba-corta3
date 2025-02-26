//import { contador, contarProductos } from "../header/header.js";

function resaltarProducto(){

    if(!this.classList.contains("resaltar")){
        this.classList.add("resaltar");
        this.querySelector('.cada-producto').checked = true;
    }else{
        this.classList.remove("resaltar");
        this.querySelector('.cada-producto').checked = false;
    }

}

function eliminarProducto(cadaProducto){
    cadaProducto.remove();
} 

function agregarProducto(nombreProducto, carrito){
    carrito.unshift(nombreProducto);
    console.log(carrito);

}

export {resaltarProducto, eliminarProducto, agregarProducto};