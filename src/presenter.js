import Tarea from "./tarea.js";
import Materia from "./materia";
import materias from "./materias.js";
import estudiantes from "./estudiantes.js";


const createForm = document.querySelector("#formBox");

const titulo = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");

let divListaTareas = document.querySelector("#lista-tareas");
const vista = document.querySelector("#vista-div");
const mensaje = "se creo la tarea";
let tareas = [];

const crear = document.querySelector("#crear-form");

const materiadada = document.querySelector("#nombre-materia-items");
const docente = document.querySelector("#docente-item");
const vistaMat = document.querySelector("#vistaMat-div");
let nuevasMaterias = [];

//const divMaterias = document.querySelector("#lista-materias-div"); YA NO ES NECESARIO, TODAS LAS MATERIAS SE VEN EN EL COMBO BOX
const report = document.querySelector("#reporte-tareas");
const reportBtn = document.querySelector("#report-btn");
const sortBySub = document.querySelector("#sort-by-sub-btn");
const sortByDate = document.querySelector("#sort-by-date-btn");

let listaDeTareas = "";
let listaFechas = [];
let students = estudiantes;


for (i = 0; i < materias.length; i++) {
  sub.options[i] = new Option(
    materias[i].nombre + ":" + materias[i].docente,
    materias[i].nombre
  );
}

crear.addEventListener("submit", (event) => {
  event.preventDefault();
  const materia_nombre = materiadada.value;
  const docente_text = docente.value;

  let materia = new Materia();
  let checkMateria = materia.crearMateria(materia_nombre, docente_text);
  nuevasMaterias.push(materia);

  if(checkMateria == true)
  {
    vistaMat.innerHTML = "<p> creada con exito !! </p>";

    sub.options[sub.options.length] = new Option(
      materia_nombre + ":" + docente_text,
      materia_nombre
    );
  }

  else{
    vistaMat.innerHTML = "<p> No se pudo crear la materia</p>";
  }

});

createForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tarea = new Tarea();

  const tituloTarea = titulo.value;
  const descTarea = desc.value;
  const subTarea = sub.options[sub.selectedIndex].text;
  const dateTarea = date.value;

  tarea.crear(tituloTarea, descTarea, subTarea, dateTarea);
  tareas.push(tarea);
  listaFechas.push(dateTarea);
  vista.innerHTML = "<p>" + mensaje + "</p>";

  //console.log(listaFechas);

  listaDeTareas = "";
  for (i = 0; i < tareas.length; i++) {
    listaDeTareas = listaDeTareas + tareas[i].getDetalles();
  }
  divListaTareas.innerHTML = listaDeTareas;
});

sortByDate.addEventListener("click", (event) => {
  event.preventDefault();
  tareas.sort((a, b) => (a.fecha > b.fecha ? 1 : -1));
  listaDeTareas = "";
  for (i = 0; i < tareas.length; i++) {
    listaDeTareas = listaDeTareas + tareas[i].getDetalles();
  }

  divListaTareas.innerHTML = listaDeTareas;
});

sortBySub.addEventListener("click", (event) => {
  event.preventDefault();
  tareas.sort((a, b) => (a.materia > b.materia ? 1 : -1));
  listaDeTareas = "";
  for (i = 0; i < tareas.length; i++) {
    listaDeTareas = listaDeTareas + tareas[i].getDetalles();
  }

  divListaTareas.innerHTML = listaDeTareas;
});


reportBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log(students)
  let reporteTareas = "";

  let studentCounter = 0;

  for (i = 0; i < tareas.length; i++) 
  {
    studentCounter= 0;
    for (j = 0; j < students.length; j++){ 
    
      if (students[j].materias.includes(tareas[i].materia)){
        studentCounter++;
        console.log(tareas[i].materia , students[j].materias)
      }
    }
    reporteTareas = reporteTareas + tareas[i].getDetallesBrief() + "(" + studentCounter.toString() + ")";
  }
  report.innerHTML = reporteTareas;


});