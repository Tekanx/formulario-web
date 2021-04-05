let form = document.getElementById("formBody");
let mensaje = document.getElementById("gracias");

let nombreUsuario = document.getElementById("nameUser");
let apellidoUsuario = document.getElementById("lastnameUser");
let rut = document.getElementById("rutUser");
let digitoVerificador = document.getElementById("dv");
let rutUsuario = rut + "-" + digitoVerificador;
let emailUsuario = document.getElementById("emailUser");
let numeroUsuario = document.getElementById("phoneNumberUser");
let lenguajePython = document.getElementById("python");
let lenguajeJava = document.getElementById("java");
let lenguajeType = document.getElementById("type");
let lenguajePHP = document.getElementById("php");
let lenguajeC = document.getElementById("c");
let lenguajeCmas = document.getElementById("c++");
let conocimiento = document.getElementById("knowledge");
let descripcion = document.getElementById("desPersonal");

console.log(conocimiento.innerHTML.length);

let btnEnviar = document.getElementById("enviar");
let btnReset = document.getElementById("limpiar");


function enviarFormulario(event): void{
    let lenguajes : string[] = []
    let faltasUsuario : string[] = []

    if (isNaN(parseInt(nombreUsuario.nodeValue))) faltasUsuario.push("El nombre no puede contener numeros");
    if (nombreUsuario.nodeValue === '') faltasUsuario.push("El nombre es obligatorio!");
    if (isNaN(parseInt(apellidoUsuario.nodeValue))) faltasUsuario.push("Lo/s apellido/s no puede/n contener numeros");
    if (apellidoUsuario.nodeValue === '') faltasUsuario.push("Lo/s apellido/s es obligatorio!");
    if (rut.nodeValue.length < 7 && rut.nodeValue.length > 8) faltasUsuario.push("El rut no es valido!");
    if (rut.nodeValue.length != 9) faltasUsuario.push("El numero ingresado no es valido!");


    if(faltasUsuario.length === 0){
        form.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "MUCHAS GRACIAS POR RELLENAR EL FORMULARIO!"
        mensaje.style.color = "#ff0000";
        console.log(conocimiento.innerHTML.length);
    }else faltas(faltasUsuario);
}

function faltas(faltasUsuario : string[]) : void {
    faltasUsuario.forEach(function (mensaje) {
        alert(mensaje);
    })
}

function limpiarFormulario(): void {
    nombreUsuario.nodeValue = '';
    apellidoUsuario.nodeValue = '';
    rut.nodeValue = '';
    digitoVerificador.nodeValue = '';
    emailUsuario.nodeValue = '';
    numeroUsuario.nodeValue = '';
    descripcion.nodeValue = '';
}

btnEnviar.addEventListener("submit", enviarFormulario)

btnReset.addEventListener("reset", limpiarFormulario)
