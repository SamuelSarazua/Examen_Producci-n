import { bloque } from "../bloques/itemBloques.js";

function cargarBloques(){
    let bloque_prin = document.createElement(`div`);
    bloque_prin.className = "div-bloque";

    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  
    bloque_prin.appendChild(bloque());  

    
    return bloque_prin;
}

export { cargarBloques }