function cargarMenu(){
    let header = document.createElement(`header`);
    header.className = "div-header";

    let titu_x = document.createElement(`div`)
    titu_x.className = "titulo_x";
    titu_x.textContent = "Total X =";
    header.appendChild(titu_x);

    let titu_slash = document.createElement(`div`)
    titu_slash.className = "titulo_slash";
    titu_slash.textContent = "Total / =";
    header.appendChild(titu_slash);
    
    return header;
}

export { cargarMenu }