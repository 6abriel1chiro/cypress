describe("Crear materia", () => {
    it("Muestra campos para llenar una materia", () => {
      cy.visit("/materia");
      cy.get("#nombre-materia-items").type("Ing. Software");
      cy.get("#descripcion-item").type("En esta materia aprenderas metodologias agiles");
      cy.get("#docente-item").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vista-div").should("contain", "Materia Creada !!!");
    });
  });