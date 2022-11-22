describe("Crear materia", () => {
    it("Muestra campos para llenar una materia", () => {
      
      cy.visit("http://localhost:1234/htmls/docentes.html");
      cy.get("#nombre-materia-items").type("Ing. Software");
      cy.get("#docente-item").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vistaMat-div").should("contain", "creada con exito !!!");
    });
});

describe("Crear tarea", () => {
  it("crear una tarea", () => {
     cy.visit('http://localhost:1234/htmls/docentes.html');
    cy.get("#title").type("Ejercicios");
    cy.get("#description").type("Resolver");
    cy.get("#subject").type("Mate Basica:M. Soruco");
    cy.get("#date").type("2022-11-19")
    cy.get("#btn").click();

    cy.get("#lista-tareas").should("contain", "tarea:Ejercicios ,  descripcion:Resolver ,  materia:Mate Basica:M. Soruco ,  fecha:2022-11-19");



    
  });
});
  