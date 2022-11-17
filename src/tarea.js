class Tarea{
    constructor() {
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
    }

    crearTarea(title, desc, mat, date) {
        if (title.trim() == "" || desc.trim() == "" || mat.trim() == "" || date.trim() == "")
            return false
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        return true;
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

    mostrarTarea() {
        return `titulo:${this.titulo}, descripcion:${this.descripcion}, materia:${this.materia}, fecha:${this.fecha}`;
    }
}

export default Tarea
