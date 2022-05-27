let guardarpalabra= document.querySelector("#guardarpalabra");
let cadena = document.querySelector(".campoagregar").value;
guardarpalabra.addEventListener("click", function(event){    
    event.preventDefault()
    var cadena = document.querySelector(".campoagregar").value;
    console.log(cadena);    
    if(validarstring(cadena)){
            if(cadena.length <= 1){
            alert("La palabra debe tener al menos 2 letras");
            }else if(cadena.length < 8){
                guardado(cadena);
                document.querySelector("#botonagregar").style.visibility = "visible";
                document.querySelector("#botoniniciar").style.visibility = "visible";  
                document.querySelector("#guardarpalabra").style.visibility = "hidden";  
                document.querySelector("#cancelar").style.visibility = "hidden";
                document.querySelector(".campotexto").style.visibility = "hidden";                
            }else{
                alert("La palabra debe tener 8 letras como máximo");
            }
       }else{
        alert("A ingresado caracteres no válidos o espaciado por favor solo mayúsculas");
       }
});

function validarstring(cadena){   
   
    if(/^[A-Z]+$/.test(cadena)){
        return true;
    }else{
        return false;
    }

}

/******************guardando**************** */
function guardado(cadena){ 
        palabras.push(cadena.toUpperCase());
        alert("Guardado");        
        document.querySelector(".campoagregar").value="";
}
