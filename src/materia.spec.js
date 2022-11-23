import Materia from "./materia.js";

describe("CREAR MATERIA", () => {
    let materia
    beforeEach( () => {
        materia = new Materia()
    });
    it("Deberia devolver la sigla de la materia y el nombre", () => {
        materia.crearMateria("LEN-5 Ingles V", "Susan");
        expect(materia.getNombre()).toEqual("LEN-5 Ingles V");
    });
    
    it("Deberia devolver el docente encargado de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V", "Susan");
        expect(materia.getDocente()).toEqual("Susan");
    });

    it("Deberia mostrar todos los datos de la materia en un formato", () => {
        materia.crearMateria("LEN-5 Ingles V", "Susan");
        expect(materia.getDetalles()).toEqual("<p> Materia:" + materia.getNombre() + "<p>" +
        "<p> Docente:"+ materia.getDocente() + "<p>" +
        "</p>");
    });

    it("Devolver falso si un campo esta vacio al crear una materia", () => {
        let res = materia.crearMateria("LEN-5 Ingles V", "");
        expect(res).toEqual(false);
    });
});

describe("MODIFICAR MATERIA", () => {
    let materia
    beforeEach( () => {
        materia = new Materia()
    });
    it("Deberia eliminar una materia", () => {
        materia.eliminar();
        expect(materia.getNombre()).toEqual("");
        expect(materia.getDocente()).toEqual("");
    });


});
