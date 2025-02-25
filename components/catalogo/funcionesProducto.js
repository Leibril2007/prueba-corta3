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

export {resaltarProducto, eliminarProducto};