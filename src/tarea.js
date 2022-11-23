import estudiantes from "./estudiantes.js";

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

    // Borra una tarea asignada \\
    eliminar(titulo){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estado = "";

        let nuevaListaTareas = [];
        for(let i=0; i<this.listaTareas.length; i++){
            if(this.listaTareas[i].titulo!=titulo){
                nuevaListaTareas.push(this.listaTareas[i]);
            }
        }
        this.listaTareas = nuevaListaTareas;
    }

    mostrarLista(){
        let mostrar = "";
        let fechaaux = "";
        let conta = 0;
        for(let i=0; i<this.listaTareas.length; i++){
            for(let j=0; j<estudiantes.estudiantes.length; j++){
              for(let x=0; x<estudiantes.estudiantes[j].materia.length; x++){
                if(this.listaTareas[i].materia == estudiantes.estudiantes[j].materia[x]){
                  conta++;
                }
              }                
            }
            if(fechaaux == this.listaTareas[i].fecha.toISOString().slice(0, -14)){
                mostrar+= "<br> Materia: " + this.listaTareas[i].materia + " Tarea: " + this.listaTareas[i].titulo +"("+ conta +")";
            }else{
                mostrar+= '<br> Fecha:' + this.listaTareas[i].fecha.toISOString().slice(0, -14) +
                "<br> Materia: " + this.listaTareas[i].materia    + " Tarea: " + this.listaTareas[i].titulo +"("+ conta +")";
                fechaaux=this.listaTareas[i].fecha.toISOString().slice(0, -14);
            }
            conta=0;
        }
        return mostrar;
    }


    // isInSubjectList(materias)
    // {
    //     if (materias.includes(this.materia) )
    //     {
    //         return true;
    //     }
    // }

    agregar(Tarea){              
        this.listaTareas.push(Tarea);
        
        this.listaTareas=this.listaTareas.sort((a, b) => a.fecha - b.fecha);
    }

    buscar(titulo){
        let aux = titulo;
        for(let i = 0;i<this.listaTareas.length;i++){
            if(this.listaTareas[i].titulo==titulo){
                return this.listaTareas[i];
            }

        }
        if(aux == titulo){
            return false;
        }
    }
}

export default Tarea
