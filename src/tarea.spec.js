import Tarea from "./tarea.js"
import Tareas from "./tareas.js"


describe("Crear una tarea", () => {
    let tareas = new Tarea;
    it("Creara una tarea con detalles simples", () => {
        expect(tareas.crear('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("tareaCreada")
    });

    it("Mostrar una tarea con detalles simples", () => {
        expect(tareas.mostrar()).toEqual("titulo:diagramas, descripcion:detalles, materia:sis info, fecha:05/2022")
    });


});

describe("Guardar tareas", () => {
    let listaTareas = new Tareas();
    let tarea = new Tarea();
    it("Crear una tarea", () => {
        expect(tarea.crear('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("tareaCreada");
    });

    it("Guardar una tarea", () => {
        expect(listaTareas.guardar(tarea)).toEqual("tareaGuardada");
    });

    it("Sobreescribir una tarea", () => {
        expect(tarea.crear('diagramas2', 'detalles2', 'sis info2', '05/20222')).toEqual("tareaCreada");
    });

    it("Guardar otra tarea", () => {
        expect(listaTareas.guardar(tarea)).toEqual("tareaGuardada");
    });

});


describe("Eliminar tareas", () => {
    let listaTareas = new Tareas();
    let tarea = new Tarea();
    it("Crear una tarea", () => {
        expect(tarea.crear('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("tareaCreada");
    });

    it("Guardar una tarea", () => {
        expect(listaTareas.guardar(tarea)).toEqual("tareaGuardada");
    });

    it("Eliminar una tarea", () => {
        expect(listaTareas.eliminar('diagramas')).toEqual([]);
    });
});


/*describe("Guardar una tarea", () => {
    it("Creara una tarea con detalles simples", () => {
        expect(tareas.crear('diagramas', 'detalles', 'sis info', '05/2022'))
    });
});*/

