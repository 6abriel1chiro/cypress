class Materia {
    constructor() {
        this.nombreMateria = "";
        this.docente = "";
        this.tareas = [];
    }

    crearMateria(siglaynombre,docente) {
        this.nombreMateria = siglaynombre;
        this.docente = docente;
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    obtenerTareas() {
       jstring = JSON.stringify(this.tareas);
       return jstring;

    }

    obtenerNombre() {
        return this.nombreMateria;
    }

    obtenerDocente() {
        return this.docente;
    }

    eliminarMateria() {
        //Esto es importante ya que al momento de tener una lista de docentes no se podra eliminar de una
        this.nombreMateria = "";
        this.docente = "";
        this.tareas = [];
    }

    obtenerTodosLosDatos() {
        let cadenaDatos = "<p> Materia:" + this.obtenerNombre() + "<p>" +
                          "<p> Fecha:"+ this.obtenerDocente() + "<p>" +
                          "</p>";
        return cadenaDatos;
    }
}

export default Materia;
