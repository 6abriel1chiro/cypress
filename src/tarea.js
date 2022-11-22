class Tarea{
    constructor() {
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estado = "";

    }

    getTitulo(){
        return this.titulo;
    }

    getDescripcion(){
        return this.descripcion;
    }
    getMateria(){
        return this.materia;
    }

    getFecha(){
        return this.fecha;
    }
    getEstado(){
        return this.estado;
    }


    crear(title, desc, mat, date){
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        this.estado = "pendiente";

    }

    getDetalles(){
        let cadenaDatos = "<p>" + "tarea:" + this.titulo + " , " +
        " descripcion:" + this.descripcion + " , " +
        " materia:" + this.materia + " , " +
        " fecha:" + this.fecha +"</p>";
        return cadenaDatos;    
    }

    getDetallesBrief(){
        let cadenaDatos = "<p>" + "tarea:" + this.titulo + " , " +
        "materia:" + this.materia + "</p>";
        return cadenaDatos;    
    }



    eliminar(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estado = "";
    }


    isInSubjectList(materias)
    {
        if (materias.includes(this.materia) )
        {
            return true;
        }
    }

}

export default Tarea
