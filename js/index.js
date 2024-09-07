//alerta
let botonCerrar = document.querySelector(".Cerrar")
botonCerrar.addEventListener("click",function(){
    alert("Sesión cerrada correctamente")
})

//aumentarlikes
let aumentarLike1 = document.querySelector(".botonlike")
aumentarLike1.addEventListener("click", function(){
    let numeroOriginal = parseInt(document.querySelector(".numlike1").textContent);
    numeroOriginal++;
    document.querySelector(".numlike1").textContent =numeroOriginal;
})
let aumentarLike2 = document.querySelector(".botonlike2")
aumentarLike2.addEventListener("click", function(){
    let numeroOriginal = parseInt(document.querySelector(".numlike2").textContent);
    numeroOriginal++;
    document.querySelector(".numlike2").textContent =numeroOriginal;
})
let aumentarLike3 = document.querySelector(".botonlike3")
aumentarLike3.addEventListener("click", function(){
    let numeroOriginal = parseInt(document.querySelector(".numlike3").textContent);
    numeroOriginal++;
    document.querySelector(".numlike3").textContent =numeroOriginal;
})
let aumentarLike4 = document.querySelector(".botonlike4")
aumentarLike4.addEventListener("click", function(){
    let numeroOriginal = parseInt(document.querySelector(".numlike4").textContent);
    numeroOriginal++;
    document.querySelector(".numlike4").textContent =numeroOriginal;
})

//cambiar color de fondo

function cambiarColor(elemento){
    elemento.classList.add("extra");
}



