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


describe("ELIMINADOR de tarea", () => {
    tarea.crear('ejercicio', 'diagramas', 'sis info', '05/2022');
    it("la tarea debe estar eliminada", () => {
        tarea.eliminar();
        expect(tarea.getTitulo()).toEqual("");
        expect(tarea.getDescripcion()).toEqual("");
        expect(tarea.getEstado()).toEqual("");
        expect(tarea.getMateria()).toEqual("");
        expect(tarea.getFecha()).toEqual("");
    });
    it("Deberia agregar y eliminar una tarea", () => {
        const test1 = new Tarea("UNO","Bda2","llenar base de datos","2022-04-10");
        tarea.agregar(test1);
        tarea.eliminar("UNO");
        expect(tarea.mostrarLista()).toEqual("");
      });
    it("Deberia agregar dos tareas y eliminarlas ambas tareas", () => {
        const test1 = new Tarea("UNO","Bda2","llenar base de datos","2022-04-10");
        tarea.agregar(test1)
        const test2 = new Tarea("DOS","Bda1","llenar base de datos","2022-04-15");
        tarea.agregar(test2)
        tarea.eliminar("UNO");
        tarea.eliminar("DOS");
        expect(tarea.mostrarLista()).toEqual("");
    });
});

describe("MODIFICADOR de tarea", () => {
    /* 
    it("Deberia modificar la tarea", () => {
        materia.editarTarea();
        expect(materia.getDocente()).toEqual("");
    });
    */
});

describe("BUSCADOR de tarea", () => {
    it("Deberia buscar una tarea que no existe y regresar No se encontro.", () => {
        const test1 = new Tarea("Web Scrapping","Recopilacion de informacion","Sis info III","12-04-2022");
        tarea.agregar(test1)
        const resultado = tarea.buscar("Tablas Hash");
        expect(resultado).toEqual("No se encontro.");
    });
    it("Deberia buscar una tarea asignada", () => {
        const test1 = new Tarea("Web Scrapping","Recopilacion de informacion","Sis info III","12-04-2022");
        tarea.agregar(test1)
        const test2 = new Tarea("Tablas Hash","Hallar los negativos","Estructura de datos","12-04-2022");
        tarea.agregar(test2)
        const test3 = new Tarea("Intermedium","Mision-Vision","Auditoria","12-04-2022");
        tarea.agregar(test3)
        const resultado = tarea.buscar("Intermedium");
        expect(resultado).toEqual(test3);
    });
});