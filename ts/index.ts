let form = document.getElementById("formBody");
let mensaje = document.getElementById("gracias");

let nombreUsuario = document.getElementById("nameUser");
let apellidoUsuario = document.getElementById("lastnameUser");
let rut = document.getElementById("rutUser");
let digitoVerificador = document.getElementById("dv");
let emailUsuario = document.getElementById("emailUser");
let numeroUsuario = document.getElementById("phoneNumberUser");
let lenguajes = document.getElementsByName("langProgramming");
let conocimiento = document.getElementById("knowledge");
let tiempoExp = document.getElementsByName("yearsKnowledge");
let descripcion = document.getElementById("desPersonal");
mensaje.style.display = "none";

let btnEnviar = document.getElementById("enviar");
let btnReset = document.getElementById("limpiar");


function enviarFormulario(event): void{
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
        mensaje.style.color = "#ff0000";
        console.log(conocimiento.innerHTML.length);
        imprimirUsuario();
    }else faltas(faltasUsuario);
}

function faltas(faltasUsuario : string[]) : void {
    faltasUsuario.forEach(function (mensaje) {
        alert(mensaje);
    })
}

function imprimirUsuario() {
    let lenguajesUsuario : string[] = []
    let rutUsuario = rut + "-" + digitoVerificador;
    let numeroCelular = "+56" +numeroUsuario.nodeValue;
    console.log(nombreUsuario.nodeValue);
    console.log(apellidoUsuario.nodeValue);
    console.log(rutUsuario);
    console.log(emailUsuario.nodeValue);
    console.log(numeroCelular);
    lenguajes.forEach(function (leng){
        lenguajesUsuario.push(leng.nodeValue);
    })
    console.log("-------------------------------------------------");
    console.log("El Usuario tiene estos conocimientos de lenguaje: ");
    lenguajesUsuario.forEach(function (leng){
        console.log(leng);
    })
    console.log("-------------------------------------------------");
    console.log(`Tiene ${conocimiento.nodeValue}% de conocimiento`);
    console.log(`Tiene ${tiempoExp.item.toString} años de experiencia`);
    console.log(`${nombreUsuario.nodeValue} ${apellidoUsuario.nodeValue} se describe de la siguiente forma: ${descripcion.nodeValue}`);

}

function limpiarDatos(): void {
    nombreUsuario.nodeValue = '';
    apellidoUsuario.nodeValue = '';
    rut.nodeValue = '';
    digitoVerificador.nodeValue = '';
    emailUsuario.nodeValue = '';
    numeroUsuario.nodeValue = '';
    descripcion.nodeValue = '';
}

btnEnviar.addEventListener("submit", enviarFormulario)

btnReset.addEventListener("reset", limpiarDatos)
