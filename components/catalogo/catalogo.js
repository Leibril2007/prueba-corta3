import { dataProductos } from "./data.js";
import { producto } from "./itemProducto.js";
import { resaltarProducto, eliminarProducto } from "./funcionesProducto.js";

function cargarProductos(){
    let base = document.createElement('div');
    base.className = "base";

    base.appendChild(producto(dataProductos, resaltarProducto, eliminarProducto));

    return base;
}

export {cargarProductos};