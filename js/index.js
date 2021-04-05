var form = document.getElementById("formBody");
var mensaje = document.getElementById("gracias");
var nombreUsuario = document.getElementById("nameUser");
var apellidoUsuario = document.getElementById("lastnameUser");
var rut = document.getElementById("rutUser");
var digitoVerificador = document.getElementById("dv");
var rutUsuario = rut + "-" + digitoVerificador;
var emailUsuario = document.getElementById("emailUser");
var numeroUsuario = document.getElementById("phoneNumberUser");
var lenguajePython = document.getElementById("python");
var lenguajeJava = document.getElementById("java");
var lenguajeType = document.getElementById("type");
var lenguajePHP = document.getElementById("php");
var lenguajeC = document.getElementById("c");
var lenguajeCmas = document.getElementById("c++");
var conocimiento = document.getElementById("knowledge");
var descripcion = document.getElementById("desPersonal");
console.log(conocimiento.innerHTML.length);
var btnEnviar = document.getElementById("enviar");
var btnReset = document.getElementById("limpiar");
function enviarFormulario(event) {
    var lenguajes = [];
    var faltasUsuario = [];
    if (isNaN(parseInt(nombreUsuario.nodeValue)))
        faltasUsuario.push("El nombre no puede contener numeros");
    if (nombreUsuario.nodeValue === '')
        faltasUsuario.push("El nombre es obligatorio!");
    if (isNaN(parseInt(apellidoUsuario.nodeValue)))
        faltasUsuario.push("Lo/s apellido/s no puede/n contener numeros");
    if (apellidoUsuario.nodeValue === '')
        faltasUsuario.push("Lo/s apellido/s es obligatorio!");
    if (rut.nodeValue.length < 7 && rut.nodeValue.length > 8)
        faltasUsuario.push("El rut no es valido!");
    if (rut.nodeValue.length != 9)
        faltasUsuario.push("El numero ingresado no es valido!");
    if (faltasUsuario.length === 0) {
        form.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "MUCHAS GRACIAS POR RELLENAR EL FORMULARIO!";
        mensaje.style.color = "#ff0000";
        console.log(conocimiento.innerHTML.length);
    }
    else
        faltas(faltasUsuario);
}
function faltas(faltasUsuario) {
    faltasUsuario.forEach(function (mensaje) {
        alert(mensaje);
    });
}
function limpiarFormulario() {
    nombreUsuario.nodeValue = '';
    apellidoUsuario.nodeValue = '';
    rut.nodeValue = '';
    digitoVerificador.nodeValue = '';
    emailUsuario.nodeValue = '';
    numeroUsuario.nodeValue = '';
    descripcion.nodeValue = '';
}
btnEnviar.addEventListener("submit", enviarFormulario);
btnReset.addEventListener("reset", limpiarFormulario);
