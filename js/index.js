var form = document.getElementById("formBody");
var mensaje = document.getElementById("gracias");
var nombreUsuario = document.getElementById("nameUser");
var apellidoUsuario = document.getElementById("lastnameUser");
var rut = document.getElementById("rutUser");
var digitoVerificador = document.getElementById("dv");
var emailUsuario = document.getElementById("emailUser");
var numeroUsuario = document.getElementById("phoneNumberUser");
var lenguajes = document.getElementsByName("langProgramming");
var conocimiento = document.getElementById("knowledge");
var tiempoExp = document.getElementsByName("yearsKnowledge");
var descripcion = document.getElementById("desPersonal");
mensaje.style.display = "none";
var btnEnviar = document.getElementById("enviar");
var btnReset = document.getElementById("limpiar");
function enviarFormulario(event) {
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
        mensaje.style.color = "#ff0000";
        console.log(conocimiento.innerHTML.length);
        imprimirUsuario();
    }
    else
        faltas(faltasUsuario);
}
function faltas(faltasUsuario) {
    faltasUsuario.forEach(function (mensaje) {
        alert(mensaje);
    });
}
function imprimirUsuario() {
    var lenguajesUsuario = [];
    var rutUsuario = rut + "-" + digitoVerificador;
    var numeroCelular = "+56" + numeroUsuario.nodeValue;
    console.log(nombreUsuario.nodeValue);
    console.log(apellidoUsuario.nodeValue);
    console.log(rutUsuario);
    console.log(emailUsuario.nodeValue);
    console.log(numeroCelular);
    lenguajes.forEach(function (leng) {
        lenguajesUsuario.push(leng.nodeValue);
    });
    console.log("-------------------------------------------------");
    console.log("El Usuario tiene estos conocimientos de lenguaje: ");
    lenguajesUsuario.forEach(function (leng) {
        console.log(leng);
    });
    console.log("-------------------------------------------------");
    console.log("Tiene " + conocimiento.nodeValue + "% de conocimiento");
    console.log("Tiene " + tiempoExp.item.toString + " a\u00F1os de experiencia");
    console.log(nombreUsuario.nodeValue + " " + apellidoUsuario.nodeValue + " se describe de la siguiente forma: " + descripcion.nodeValue);
}
function limpiarDatos() {
    nombreUsuario.nodeValue = '';
    apellidoUsuario.nodeValue = '';
    rut.nodeValue = '';
    digitoVerificador.nodeValue = '';
    emailUsuario.nodeValue = '';
    numeroUsuario.nodeValue = '';
    descripcion.nodeValue = '';
}
btnEnviar.addEventListener("submit", enviarFormulario);
btnReset.addEventListener("reset", limpiarDatos);
