describe("Cambiar de Paginas", () => {
  it("Deberia cambiar a la pagina de docentes para Registrar una Materia al hacer click en el boton Ingresar", () => {
  cy.visit('http://localhost:1234/htmls/docentes.html');
  cy.get("#materias-section").should("contain", "Registrar Materia");
  });

  it("Deberia cambiar a la pagina de docentes para Registrar una Tarea al hacer click en el boton Ingresar", () => {
    cy.visit('http://localhost:1234/htmls/docentes.html');
    cy.get("#tareas-section").should("contain", "Registrar Tarea");
  });

  it("Deberia cambiar a la pagina de docentes para Buscar una Tarea al hacer click en el boton Ingresar", () => {
    cy.visit('http://localhost:1234/htmls/docentes.html');
    cy.get("#buscador-form").should("contain", "Buscar Tarea");
  });
});

describe("Cambiar vista de usuario", () => {
  it("deberia ingresar a la pagina de Docentes para seleccionar una materia por defecto", () => {
    cy.visit('http://localhost:1234/htmls/docentes.html');
    cy.get('#subject').select('Mate Basica:M. Soruco').should('have.value', 'Mate Basica')  });

});
