function producto(data, resaltarProducto, eliminarProducto){

    let cuadroProductoB = document.createElement('div');
    cuadroProductoB.className = "cuadro-producto";

    data.forEach(eLista => {

        let cadaProducto = document.createElement('div');
        cadaProducto.className = "cada-producto";

        let imgProducto = document.createElement('img');
        imgProducto.className = "cuadrito-img"; 
        imgProducto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-LOG1BwXZ6CX_fqjq0ue__kd__y21ALQkg&s";
        imgProducto.alt = "img";

        let textP = document.createElement('p');
        textP.className = "texto-producto";
        textP.textContent = eLista;

        let precioBtn = document.createElement('div');
        precioBtn.className = "precio-boton";

        let precio = document.createElement('p');
        precio.className = "precio-text";
        precio.textContent = "Q 00.00";
        precioBtn.appendChild(precio);

        let btn = document.createElement('div');
        btn.className = "btn-eliminar";
        btn.textContent = "eliminar";

        btn.addEventListener("click", ()=>{
            eliminarProducto(cadaProducto);
        });

        precioBtn.appendChild(btn);
        cadaProducto.addEventListener("click", resaltarProducto);

        cadaProducto.appendChild(imgProducto);
        cadaProducto.appendChild(textP);
        cadaProducto.appendChild(precioBtn);

        cuadroProductoB.appendChild(cadaProducto);
    });

    return cuadroProductoB;
}

export { producto };