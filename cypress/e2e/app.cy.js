describe("Crear materia", () => {
    it("Muestra campos para llenar una materia", () => {
      cy.visit("http://localhost:1234/htmls/docentes.html");
      cy.get("#nombre-materia-items").type("Ing. Software");
      cy.get("#docente-item").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vistaMat-div").should("contain", "creada con exito !!");
    });

    it("No se creo una materia porque no tiene nombre", () => {
      cy.visit("http://localhost:1234/htmls/docentes.html");
      cy.get("#docente-item").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vistaMat-div").should("contain", "No se pudo crear la materia");
    });

    it("No se creo una materia porque no tiene docente", () => {
      cy.visit("http://localhost:1234/htmls/docentes.html");
      cy.get("#nombre-materia-items").type("Ing. Software");
      cy.get("#crear-button").click();
      cy.get("#vistaMat-div").should("contain", "No se pudo crear la materia");
    });
});

describe("Crear tarea", () => {
  it("crear una tarea", () => {
     cy.visit('http://localhost:1234/htmls/docentes.html');
    cy.get("#title").type("Ejercicios");
    cy.get("#description").type("Resolver");
    cy.get("#subject").select("Mate Basica");
    cy.get("#date").type("2022-11-19")
    cy.get("#btn").click();

    cy.get("#lista-tareas").should("contain", "tarea:Ejercicios ,  descripcion:Resolver ,  materia:Mate Basica:M. Soruco ,  fecha:2022-11-19");
    
  });

  it("crear una tarea", () => {
    cy.visit('http://localhost:1234/htmls/docentes.html');
   cy.get("#title").type("Ejercicios");
   cy.get("#subject").select("Mate Basica");
   cy.get("#date").type("2022-11-19")
   cy.get("#btn").click();   

   cy.get("#vista-div").should("contain","No se creo la tarea")
 });
});

describe("Crear una materia", () => {
  it("crear una materia", () => {
     cy.visit('http://localhost:1234/htmls/docentes.html');
     cy.get("#nombre-materia-items").type("Ing. Software");
     cy.get("#docente-item").type("Israel Antezana");
     cy.get("#crear-button").click();

     cy.get("#subject").select('Ing. Software');
  });
});


describe("Ordenar lista de tareas", () => {
  it("Ordenar por fecha", () => {
    cy.visit('http://localhost:1234/htmls/docentes.html');
    cy.get("#title").type("Ejercicios");
    cy.get("#description").type("Resolver");
    cy.get("#subject").select("Mate Basica");
    cy.get("#date").type("2022-11-20");
    cy.get("#btn").click();

    cy.get("#title").clear();
    cy.get("#description").clear();
    cy.get("#date").clear();

    cy.get("#title").type("programacion");
    cy.get("#description").type("hacer");
    cy.get("#subject").select("Intro a la progra");
    cy.get("#date").type("2022-10-20");
    cy.get("#btn").click();

    cy.get("#title").type("Ejercicios");
    cy.get("#description").type("Resolver");
    cy.get("#subject").select("Algebra Lineal");
    cy.get("#date").type("2022-09-20");
    cy.get("#btn").click();

    cy.get("#lista-tareas").should("contain", "tarea:Ejercicios ,  descripcion:Resolver ,  materia:Mate Basica:M. Soruco ,  fecha:2022-11-20" );
  });
});

describe("Buscador de tareas", () => {
  it("Deberia encontrar una tarea por su titulo", () => {
  cy.visit('http://localhost:1234/htmls/docentes.html');

  cy.get("#title").type("tarea 5");
  cy.get("#description").type("realiza tu tarea");
  cy.get("#subject").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
  cy.get("#date").type("2022-11-20");
  cy.get("#btn").click();

  cy.get("#buscar-tarea").type("tarea 5");
  cy.get("#buscar-button").click();

  cy.get("#encontrado-div").should("contain", "Tarea: tarea 5", 
                                              "Descripcion: realiza tu tarea",
                                              "Materia: Mate Basica:M. Soruco",
                                              "Fecha: 2022-11-20");
  });
  it("Alerta si no se encuentra una tarea", () => {
    cy.visit('http://localhost:1234/htmls/docentes.html');
  
    cy.get("#title").type("tarea 5");
    cy.get("#description").type("realiza tu tarea");
    cy.get("#subject").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
    cy.get("#date").type("2022-11-20");
    cy.get("#btn").click();
  
    cy.get("#buscar-button").click();
  
    cy.get("#encontrado-div").should("contain", "No se encontro la tarea");
    }); 
});
  