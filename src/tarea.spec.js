import Tarea from "./tarea.js"
let tarea = new Tarea;

describe("CREAR UNA TAREA", () => {
    it("Deberia devolver el titulo de la tarea", () => {
        tarea.crear("Proyectos de grados", "Investigar metodologias agiles", "Taller de desarrollo", "16/11/2022");
        expect(tarea.getTitulo()).toEqual("Proyectos de grados");
    });

    it("Deberia devolver la descripcion de la tarea", () => {
        tarea.crear("Proyectos de grados", "Investigar metodologias agiles", "Taller de desarrollo", "16/11/2022");
        expect(tarea.getDescripcion()).toEqual("Investigar metodologias agiles");
    });
});


describe("Crear una tarea", () => {
    let tarea = new Tarea;

    
    it("Creara una tarea con detalles simples", () => {
        tarea.crear('ejercicio', 'diagramas', 'sis info', '05/2022');


        expect(tarea.getDetalles()).toEqual( "<p>" + "tarea:" + tarea.titulo + " , " +
        " descripcion:" + tarea.descripcion + " , " +
        " materia:" + tarea.materia + " , " +
        " fecha:" + tarea.fecha +"</p>"  )
    });


    it("mostrara los datos basicos de una tarea", () => {
        tarea.crear('ejercicio', 'diagramas', 'sis info', '05/2022');


        expect(tarea.getDetallesBrief()).toEqual( "<p>" + "tarea:" + tarea.titulo + " , " +
        "materia:" + tarea.materia + "</p>"  )
    });


    it("Deberia devolver el titulo de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.getTitulo()).toEqual(tarea.titulo);
    });
    it("Deberia devolver descripcion de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.getDescripcion()).toEqual(tarea.descripcion);
    });
    it("Deberia devolver la fecha de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.getFecha()).toEqual(tarea.fecha);
    });
    it("Deberia devolver la materia de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.getMateria()).toEqual(tarea.materia);
    });



});


describe("ELIMINAR tarea", () => {
    let tarea = new Tarea;
    tarea.crear('ejercicio', 'diagramas', 'sis info', '05/2022');

    it("la tarea debe estar eliminada", () => {
        tarea.eliminar();""
        expect(tarea.getTitulo()).toEqual("");
        expect(tarea.getDescripcion()).toEqual("");
        expect(tarea.getEstado()).toEqual("");
        expect(tarea.getMateria()).toEqual("");
        expect(tarea.getFecha()).toEqual("");


    });

    /* 
    it("Deberia modificar la tarea", () => {
        materia.editarTarea();
        expect(materia.getDocente()).toEqual("");
    });
    */
});
