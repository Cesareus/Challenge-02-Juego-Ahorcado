let mostrar = document.querySelector(".vidas");
let winorlose = document.getElementById("textogrande");



function nuevoJuego(){    
    document.querySelector(".horca").style.visibility = "hidden";
    mostrar.textContent=""; 
    juegardenuevo();    
}
/* Función que oculta todos los elementos del ahorcado y llama a la función 
jugardenuevo, asignada al botón nuevojuego*/

function perderoganar(errores){    
    let lifes = 10-errores.length;
    switch(lifes){
        case 9:{
            document.querySelector(".horca").style.visibility = "visible";
            document.querySelector(".horca").src = "horca/1.png";
            break;
        }
        case 8:{
            document.querySelector(".horca").src = "horca/2.png";
            break;
        }
        case 7:{
            document.querySelector(".horca").src = "horca/3.png";
            break;
        }
        case 6:{
            document.querySelector(".horca").src = "horca/4.png";
            break;
        }
        case 5:{
            document.querySelector(".horca").src = "horca/5.png";
            break;
        }
        case 4:{
            document.querySelector(".horca").src = "horca/6.png";
            break;
        }
        case 3:{
            document.querySelector(".horca").src = "horca/7.png";
            break;
        }
        case 2:{
            document.querySelector(".horca").src = "horca/8.png";
            break;
        }
        case 1:{
            document.querySelector(".horca").src = "horca/9.png";
            break;
        }
        case 0:{
            document.querySelector(".horca").src = "horca/10.gif";
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

