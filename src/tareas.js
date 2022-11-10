import Tarea from "./tarea.js"

class Tareas{
    constructor(){
        this.listaTareas = [];
    }

    guardar(tarea){
        this.listaTareas.push(tarea);
        return "tareaGuardada";
    }

    eliminar(tarea, nomTarea){
        this.listaTareas.filter(tarea.nomTarea)
        return this.listaTareas;
    }
}

export default Tareas