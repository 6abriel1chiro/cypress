class Tarea{
    mostrar="";
    constructor(titulo, descripcion, materia, fecha) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.materia = materia;
        this.fecha = fecha;
        this.listaTareas = [];
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
        if (title==""|| desc==""|| mat==""|| date=="")
        {
            return false;
        }
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        this.estado = "pendiente";
        return true;

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

    agregar(Tarea){              
        this.listaTareas.push(Tarea);
        
        this.listaTareas=this.listaTareas.sort((a, b) => a.fecha - b.fecha);
    }

    buscar(titulo){
        for(let i = 0;i<this.listaTareas.length;i++){
            if(this.listaTareas[i].titulo==titulo){
                return this.listaTareas[i];
            }
        }
    }
}

export default Tarea
