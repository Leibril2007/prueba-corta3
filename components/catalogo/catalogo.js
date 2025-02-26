import { dataProductos, carrito } from "./data.js";
import { producto } from "./itemProducto.js";
import { resaltarProducto, agregarProducto} from "./funcionesProducto.js";

function cargarProductos(){
    let base = document.createElement('div');
    base.className = "base";

    base.appendChild(producto(dataProductos, resaltarProducto, agregarProducto, carrito));

    return base;
}

export {cargarProductos};