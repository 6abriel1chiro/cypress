class Materia {
    constructor() {
        this.nombreMateria = "";
        this.descripcion = "";
        this.docente = "";
    }
    crearMateria(siglaynombre,descripcion,docente){
        this.nombreMateria = siglaynombre;
        this.descripcion = descripcion;
        this.docente = docente;
    }
    obtenerNombre(){
        return this.nombreMateria;
    }
    obtenerDescripcion(){
        return this.descripcion;
    }
    obtenerDocente(){
        return this.docente;
    }
    #obtienetodoslosdatosenformatohtml
    obtenerTodosLosDatos(){
        let cadenaDatos = "<p> Materia:" + this.obtenerNombre() + "<p>" +
                    "<p> Tarea:" + this.obtenerDescripcion() + "<p>" +
                    "<p> Fecha:"+ this.obtenerDocente() + "<p>" +
                    "</p>";
        return cadenaDatos;

    }
    eliminarMateria(){
        //Esto es importante ya que al momento de tener una lista de docentes no se podra eliminar de una
        this.nombreMateria = "";
        this.descripcion = "";
        this.docente = "";
    }
}

export default Materia;