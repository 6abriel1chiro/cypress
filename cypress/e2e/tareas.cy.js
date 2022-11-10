describe("Crear tarea", () => {
    it("Muestra campos para llenar una materia", () => {
      cy.visit("/materia");
      cy.get("#materia").type("Ing. Software");
      cy.get("#tarea").type("En esta materia aprenderas metodologias agiles");
      cy.get("#fecha").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vista-div").should("contain", "Materia Creada !!!");
    });
  });