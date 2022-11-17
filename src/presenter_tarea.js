import Tarea from "./tarea.js"

const titulo = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");

const createForm = document.querySelector("#formBox");
const vista = document.querySelector("#vista-div");

let divConfirmacion = document.querySelector("#msg");

const mensaje = "creada con exito !!!";

let listaTareas = []

createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tarea = new Tarea();

    const titutloTarea = titulo.value;
    const descTarea =desc.value;
    const subTarea = sub.options[sub.selectedIndex].text;
    const dateTarea = date.value;

    //console.log(titutloTarea, descTarea, subTarea, dateTarea);
    tarea.crearTarea(titutloTarea, descTarea, subTarea, dateTarea);
    
    listaTareas.push(tarea);

    vista.innerHTML = "<p>" + mensaje + "<p>" +
                      "</p>";

    let listaParaMostrar = "";
    for(i=0;i<listaTareas.length;i++) {
      listaParaMostrar = listaParaMostrar + listaTareas[i].obtenerTodosLosDatos(); 
    }

    divConfirmacion.innerHTML = listaParaMostrar;
});
  