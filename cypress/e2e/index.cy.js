describe("Ver pagina principal", () => {
    it("deberia ingresar a la pagina principal", () => {
      cy.visit('index.html');
      cy.get("#title").should("contain", "Flow Project Manager");
    });
    it("deberia tener dos botones", () => {
        cy.visit('index.html');
        cy.get("#boton-docente").should("contain","Ingresar");
    });
    it("el boton de Ingresar debe redireccionar a la pagina de docentes", () => {
        cy.visit('index.html');
        cy.get("#boton-docente").click();
        cy.url().should("include", "/htmls/docentes");
    });

  });