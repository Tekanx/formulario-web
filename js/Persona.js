"use strict";
var Persona = /** @class */ (function () {
    function Persona(RUT, name, lastname, email, phoneNumber, listaLenguajes, conocimiento, aniosExperiencia, descripcion) {
        this.RUT = RUT;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.listaLenguajes = listaLenguajes;
        this.conocimiento = conocimiento;
        this.aniosExperiencia = aniosExperiencia;
        this.descripcion = descripcion;
    }
    return Persona;
}());
