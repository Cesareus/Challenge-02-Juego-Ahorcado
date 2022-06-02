    
window.onload = traerDatos();
let iniciarJuego = document.querySelector("#botoniniciar");
let nuevojuego = document.querySelector("#nuevojuego");
let palabras=[];

iniciarJuego.addEventListener("click",function(){
    document.querySelector("#botonagregar").style.visibility = "hidden";
    document.querySelector("#botoniniciar").style.visibility = "hidden"; 
    document.querySelector("#nuevojuego").style.visibility = "visible";
    document.querySelector("#desistir").style.visibility = "visible";
    document.querySelector(".cajatexto").style.visibility = "visible";
    juegardenuevo(); 
});
nuevojuego.addEventListener("click",nuevoJuego);
let tablero = document.getElementById("tablero");
let textousuario = document.getElementById("textousuario");
             
function nuevapalabra(){    
    if(obtener_localstorage() != false){  
    palabras = obtener_localstorage();
    }else{
        palabras = arraypalabras;
    }
   
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];    
    let arrayletras = Array.from(palabra);
    return arrayletras;
}
/*Elije Aleatoriamente una palabra (string) del array palabras guardado en palabras.js
 y devuelve un array de letras*/
function juegardenuevo(){    
    textousuario.focus();    
    let arrayletras = nuevapalabra();    
    palabradividida(arrayletras);
    let labelantiguo= document.querySelector("label");
    if(labelantiguo != null){
        labelantiguo.remove();
    }
    tablero.appendChild(palabradividida(arrayletras));
    let erroresAntiguos = document.querySelectorAll(".sectionError p");
    erroresAntiguos.forEach(element => {
        element.remove();
    })
    let errores = [];
    textousuario.oninput = (event)=>{
        event.preventDefault();
        mostrarletras(arrayletras,errores);
        perderoganar(errores);
    }    
}
/* crea una variable array de letras y le asigna el contenido que devuelve la 
función (nueva palabra) borra el label antiguo en caso de que lo haya,
le asigna a la section tablero los span que se crean a partir del array de letras
y el nuevo label, remueve los <p> con los errores anteriores, crea el nuevo array 
de errores, se asigna un listener al input texto usuario que hace que cuándo
se ingrese algo crea una funcion flecha que llama a las funciones mostrar letras y
perderoganar */    

function palabradividida(arrayletras){
    let letras = document.createElement("label");
    letras.classList.add("palabraactual");
    letras.setAttribute("for","textousuario");
    
    let contador = 0;
    for (let i = 0; i < arrayletras.length; i++) {
            let letra = document.createElement("span");
            letra.classList.add("guionbajo");
            letra.setAttribute("id",contador);
            letras.appendChild(letra);
            contador++
    }
        return letras;
}
/*Recibe el array de letras, crea un label y se lo asigna a la variable letras
Fija un atributo ?? crea una iteración que crea para cada letra un span y le asigna
la clase guionbajo, el id contador y lo asigna como hijo del label letras que creamos*/

function mostrarletras(arrayletras,errores){
    let escribiendo = textousuario.value.toUpperCase();
    let actualId = 0;

    let letranoincluida = 0;
    let sectionError = document.querySelector(".sectionError");

    for (let i = 0; i < arrayletras.length; i++) {
        let letraactual = arrayletras[i];

        if(escribiendo == letraactual){
            let sumaletras = document.getElementById(actualId);
            sumaletras.textContent = letraactual;
        } else {
            letranoincluida++
            if(letranoincluida == arrayletras.length && (/[A-Z]/).test(escribiendo) && !errores.includes(escribiendo)){
                errores.push(escribiendo);                    
                let letraerror = document.createElement("p");
                letraerror.textContent = escribiendo;
                letraerror.classList.add("error");
                sectionError.appendChild(letraerror);               
            }
        }
        textousuario.value = "";
        actualId++
    }
}
/*función que recibe 2 parametros: el array de letras y el array errores que al 
principio está vacío toma el valor del campo input textusuario crea una variable 
actualID y la inicializa a 0, otra variable letranoincluida a 0 le asigna a la 
variable sectionerror la sección con la clase sectionError itera entre el array
de letras y crea una variable letractual a la que le va asignando cada una de las
letras del array compara si la letraingresada es igual a la letra del array
si es así crea una variable sumaletras y le asigna el valor de actualID que se 
fue incrementando y que es igual al id que se le fue asignando a cada span creado
en la función palabradividida, después le asigna la letra que se va a mostrar en el
span, sino letranoincluida se incrementa, se hace una comparación si la cantidad
de letrasnoincluidas == al tamaño del array de letras si es mayusculas la que
se ingreso y si el array errores ya no incluye la letra que se ingreso si todo eso 
se cumple suma la letra al array errores  crea una variable letraerror a la que le 
asigna un <p> que se crea y le asigna el valor de la nueva letra (error) y la suma
como hija a la sección sectionError, borra la letra ingresada y incrementa en 1 actualId
para pasar al siguiente span */