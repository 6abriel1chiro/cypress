describe("Crear materia", () => {
    it("Muestra campos para llenar una materia", () => {
      cy.visit("http://localhost:1234/htmls/materia.html");
      cy.get("#nombre-materia-items").type("Ing. Software");
      cy.get("#docente-item").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vista-div").should("contain", "creada con exito !!!");
    });
});

describe("Crear tarea", () => {
  it("Muestra campos para llenar una tarea", () => {
    cy.visit("http://localhost:1234/htmls/tareas.html");
    cy.get("#title").type("Web scrapping");
    cy.get("#description").type("Extraer datos de vuelos de aerolineas");
    cy.get("#subject").type("Ing. Software");
    cy.get("#date").type("2017-06-01T08:30");
    
    // ERRORES A SOLUCIONAR \\
    //cy.get("#crear-button").click();
    //cy.get("#vista-div").should("contain", "creada con exito !!!");
  });
});
  