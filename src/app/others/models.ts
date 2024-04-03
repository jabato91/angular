export class Artista{
    nombre: string;
    descripcion: string;
    imagen: string;
    fecha: Date;
    
    constructor(nombre: string, descripcion: string, imagen: string, fecha : Date){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.fecha = fecha;
    }
}