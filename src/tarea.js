class Tarea{
    constructor() {
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
    }

    crearTarea(title, desc, mat, date) {
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        return "Creada con exito!.";
    }

    obtenerTitulo() {
        return this.titulo;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    obtenerMateria() {
        return this.materia;
    }

    obtenerFecha() {
        return this.fecha;
    }

    eliminarTarea() {
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        return "Eliminada con exito!.";
    }

    mostrarTarea() {
        return `titulo:${this.titulo}, descripcion:${this.descripcion}, materia:${this.materia}, fecha:${this.fecha}`;
    }

    obtenerTodosLosDatos() {
        let cadenaDatos = "<p> Titulo: " + this.obtenerTitulo() + "<p>" +
                          "<p> Descripcion: "+ this.obtenerDescripcion() + "<p>" +
                          "<p> Materia: "+ this.obtenerMateria() + "<p>" +
                          "<p> Fecha: "+ this.obtenerFecha() + "<p>" +
                          "</p>";
        return cadenaDatos;
    }
}

export default Tarea
