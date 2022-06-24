let linkedin = document.querySelector(".linkedin");
let agregarPalabra= document.querySelector("#botonagregar");
let cancel = document.querySelector("#cancelar");
let desistir = document.querySelector("#desistir");
var botones = new Audio();
botones.src="sonidos/botones.mp3";


linkedin.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/césar-rosa-007104237", "Mi Linkedin", "width=800, height=600");
});
agregarPalabra.addEventListener("click",function(){
document.querySelector("#botonagregar").style.visibility = "hidden";
document.querySelector("#botoniniciar").style.visibility = "hidden";  
document.querySelector("#guardarpalabra").style.visibility = "visible";  
document.querySelector("#cancelar").style.visibility = "visible";
document.querySelector(".campotexto").style.visibility = "visible";
});
cancel.addEventListener("click",function(){
    document.querySelector("#botonagregar").style.visibility = "visible";
    document.querySelector("#botoniniciar").style.visibility = "visible";  
    document.querySelector("#guardarpalabra").style.visibility = "hidden";  
    document.querySelector("#cancelar").style.visibility = "hidden";
    document.querySelector(".campotexto").style.visibility = "hidden"; 
});
desistir.addEventListener("click",function(){
    document.querySelector("#botonagregar").style.visibility = "visible";
    document.querySelector("#botoniniciar").style.visibility = "visible"; 
    document.querySelector("#nuevojuego").style.visibility = "hidden";
    document.querySelector("#desistir").style.visibility = "hidden";    
    window.open("index.html");
    window.close("principal.html");
});