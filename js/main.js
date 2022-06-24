var linkedin = document.querySelector(".linkedin");
var botonIndex= document.querySelector(".boton-index");
var botones = new Audio();
botones.src="sonidos/botones.mp3";

linkedin.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/césar-rosa-007104237/", "Mi Linkedin", "width=800, height=600");
});
botonIndex.addEventListener("click",function(){
    window.open("principal.html");
    window.close("index.html");
});
