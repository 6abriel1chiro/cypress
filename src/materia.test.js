import Materia from "./materia.js";
let materia = new Materia();
describe("CREAR MATERIA", () => {
    
    it("Deberia devolver la sigla de la materia y el nombre", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia.obtenerNombre()).toEqual("LEN-5 Ingles V");
    });
    
    it("Deberia devolver una corta descripcion de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia.obtenerDescripcion()).toEqual("Aprende ingles");
    });
    it("Deberia devolver el docente encargado de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia.obtenerDocente()).toEqual("Susan");
    });
    it("Deberia mostrar todos los datos de la materia en un formato", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia. obtenerTodosLosDatos()).toEqual("<p> Materia:LEN-5 Ingles V<p><p> Tarea:Aprende ingles<p><p> Fecha:Susan<p></p>");
    });
});
describe("ELIMINAR MATERIA", () => {
    it("Deberia vaciar el nombre de la materia", () => {
        materia.eliminarMateria();
        expect(materia.obtenerNombre()).toEqual("");
    });
    it("Deberia eliminar la descripcion de la materia", () => {
        materia.eliminarMateria();
        expect(materia.obtenerDescripcion()).toEqual("");
    });
    it("Deberia eliminar  el nombre del docente encargado de la materia", () => {
        materia.eliminarMateria();
        expect(materia.obtenerDocente()).toEqual("");
    });
});