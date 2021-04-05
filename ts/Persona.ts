class Persona{
    RUT:string;
    name:string;
    lastname:string;
    email:string;
    phoneNumber:number;
    listaLenguajes:Array<string>;
    conocimiento:number;
    aniosExperiencia:number;
    descripcion:string;

    constructor(RUT:string, name:string, lastname:string, email:string, phoneNumber:number, conocimiento:number, aniosExperiencia:number, descripcion:string){
        this.RUT = RUT;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.listaLenguajes = new Array<string>();
        this.conocimiento = conocimiento;
        this.aniosExperiencia = aniosExperiencia;
        this.descripcion = descripcion;
    }

    public addLenguaje(lenguaje:string) : void{
        this.listaLenguajes.push(lenguaje);
    }
}