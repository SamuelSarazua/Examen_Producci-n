function bloque(){
    let cuadro = document.createElement(`div`);
    cuadro.className = "cuadro";

    let btn_x = document.createElement(`button`);
    btn_x.className = "btn_x";
    btn_x.textContent = "X";
    cuadro.appendChild(btn_x);

    let btn_slash = document.createElement(`button`);
    btn_slash.className = "btn_slash";
    btn_slash.textContent = "/";
    cuadro.appendChild(btn_slash);

    btn_x.addEventListener("click", () => {
        alert("Hola si funciono");
    });

    btn_slash.addEventListener("click", () => {
        alert("Hola si funciono");
    });

    return cuadro;
}

export { bloque }