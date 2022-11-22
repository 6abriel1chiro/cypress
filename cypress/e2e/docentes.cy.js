describe("Cambiar vista de usuario", () => {
  it("deberia ingresar a la pagina de Docentes", () => {
    cy.visit('docentes.html');
    cy.get('#subject').select('Mate Basica:M. Soruco').should('have.value', 'Mate Basica')  });

});
