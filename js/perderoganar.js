let mostrar = document.querySelector(".vidas");
let winorlose = document.getElementById("textogrande");



function nuevoJuego(){
    document.querySelector(".maderalateral").style.visibility = "hidden";
    document.querySelector(".soporteizq").style.visibility = "hidden";
    document.querySelector(".soporteder").style.visibility = "hidden";
    document.querySelector(".madcruzada").style.visibility = "hidden";
    document.querySelector(".maderaarriba").style.visibility = "hidden";
    document.querySelector(".cajasoga").style.visibility = "hidden";
    document.querySelector(".cabeza").style.visibility = "hidden";
    document.querySelector(".brazoizq").style.visibility = "hidden";
    document.querySelector(".brazoder").style.visibility = "hidden";
    document.querySelector(".cuerpo").style.visibility = "hidden";
    document.querySelector(".piernaizq").style.visibility = "hidden";
    document.querySelector(".piernader").style.visibility = "hidden";
    mostrar.textContent=""; 
    juegardenuevo();    
}
/* Función que oculta todos los elementos del ahorcado y llama a la función 
jugardenuevo, asignada al botón nuevojuego*/

function perderoganar(errores){    
    let lifes = 10-errores.length;
    switch(lifes){
        case 9:{
            document.querySelector(".maderalateral").style.visibility = "visible";
            document.querySelector(".soporteizq").style.visibility = "visible";
            document.querySelector(".soporteder").style.visibility = "visible";
            break;
        }
        case 8:{
            document.querySelector(".madcruzada").style.visibility = "visible";
            break;
        }
        case 7:{
            document.querySelector(".maderaarriba").style.visibility = "visible";
            break;
        }
        case 6:{
            document.querySelector(".cajasoga").style.visibility = "visible";
            break;
        }
        case 5:{
            document.querySelector(".cabeza").style.visibility = "visible";
            break;
        }
        case 4:{
            document.querySelector(".brazoizq").style.visibility = "visible";
            break;
        }
        case 3:{
            document.querySelector(".brazoder").style.visibility = "visible";
            break;
        }
        case 2:{
            document.querySelector(".cuerpo").style.visibility = "visible";
            break;
        }
        case 1:{
            document.querySelector(".piernaizq").style.visibility = "visible";
            break;
        }
        case 0:{
            document.querySelector(".piernader").style.visibility = "visible";
            break;
        }
        default:{                     
        }

    }    
    let letracorrecta = document.querySelectorAll(".guionbajo");
    let correctcont = 0;

    for (let i = 0; i < letracorrecta.length; i++) {
        mostrar.textContent = lifes;
        let elemento = letracorrecta[i];
        if(elemento.textContent != ""){
            correctcont++
        }
        if(correctcont == letracorrecta.length && lifes >= 1){           
            document.querySelector("label").style.visibility = "hidden";
            let erroresAntiguos = document.querySelectorAll(".sectionError p");
            erroresAntiguos.forEach(element => {
                element.remove();
            })
            mostrar.textContent=""; 
            winorlose.textContent= "YOU WIN!";            
            winorlose.style.visibility="visible";
            const music = new Audio("sonidos/youwin.mp3");
            music.play();
            music.loop =false;
            music.playbackRate = 1;           
            setTimeout(()=>{
                winorlose.style.visibility="hidden";
            },5000);                                   
        }
    }

    if(lifes <= 0){        
        document.querySelector("label").style.visibility = "hidden";
        let erroresAntiguos = document.querySelectorAll(".sectionError p");
        erroresAntiguos.forEach(element => {
            element.remove();
        })
        mostrar.textContent=""; 
        winorlose.textContent= "YOU LOSE!";
        winorlose.style.visibility="visible";
        const horca = new Audio("sonidos/ahorcado.mp3");
        horca.play();
        horca.loop =false;
        horca.playbackRate = 1;  
        const music = new Audio("sonidos/youlose.mp3");
        music.play();
        music.loop =false;
        music.playbackRate = 1;         
        setTimeout(()=>{
            winorlose.style.visibility="hidden";
        },5000);                          
    }    
}

/* Funcion que de acuerdo a la cantidad de errores va haciendo aparecer los 
elementos de la figura ahorcado y va mostrando la disminución de vidas que 
en total son 10 y cuando se gana o se pierde oculta el label, borra todos los <p> con
los errores y muestra un span oculto y reproduce sonidos*/

