describe("Ver pagina principal", () => {
    it("deberia ingresar a la pagina principal", () => {
      cy.visit('index.html');
      cy.get("#title").should("contain", "Flow Project Manager");
    });
    it("deberia tener dos botones", () => {
        cy.visit('index.html');
        cy.get("#boton-docente").should("contain","Soy docente")
        cy.get("#boton-estudiante").should("contain","Soy estudiante")
    });
  });