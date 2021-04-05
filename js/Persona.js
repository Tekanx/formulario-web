var Persona = /** @class */ (function () {
    function Persona(RUT, name, lastname, email, phoneNumber, conocimiento, aniosExperiencia, descripcion) {
        this.RUT = RUT;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.listaLenguajes = new Array();
        this.conocimiento = conocimiento;
        this.aniosExperiencia = aniosExperiencia;
        this.descripcion = descripcion;
    }
    Persona.prototype.addLenguaje = function (lenguaje) {
        this.listaLenguajes.push(lenguaje);
    };
    return Persona;
}());
