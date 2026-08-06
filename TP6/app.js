//ejercicio1
let boton1 = document.querySelector("#btnfondo")
let body = document.querySelector("body")

boton1.onclick=function(){
body.style.backgroundColor="blue"
}

//ejercicio2
let boton2 = document.querySelector("#btntexto")
let texto = document.querySelector("#parrafo")

boton2.onclick=function(){
    texto.textContent="este es el texto nuevo"
}

//ejercicio3
let boton3 = document.querySelector("#btncolor")

boton3.onclick=function(){
texto.style.color = "red"
}


