describe("Cambiar vista de usuario", () => {
  it("deberia ingresar a la pagina de Docentes", () => {
    cy.visit('http://localhost:1234/docentes.html');
    cy.get("#title").should("contain", "Docentes");
  });
});
