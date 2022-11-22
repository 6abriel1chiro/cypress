class Materia {
    constructor() {
        this.nombreMateria = "";
        this.docente = "";
    }

    crearMateria(siglaynombre,docente) {
        if(siglaynombre == "" || docente ==""){
            return false
        }
        this.nombreMateria = siglaynombre;
        this.docente = docente;
        return true;
    }

    getNombre(){
        return this.nombreMateria;
    }

    getDocente(){
        return this.docente;
    }

    getDetalles(){
        let cadenaDatos = "<p> Materia:" + this.getNombre() + "<p>" +
                    "<p> Docente:"+ this.getDocente() + "<p>" +
                    "</p>";

        return cadenaDatos;
    }

    eliminar(){
        this.nombreMateria = "";
        this.docente = "";
    }

}

export default Materia;
