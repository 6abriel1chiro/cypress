import Tarea from "./tarea.js"

const titulo = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");

const createForm = document.querySelector("#formBox");
const vista = document.querySelector("#vista-div");

let divConfirmacion = document.querySelector("#msg");


let listaTareas = []

createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tarea = new Tarea();

    const titutloTarea = titulo.value;
    const descTarea =desc.value;
    const subTarea = sub.options[sub.selectedIndex].text;
    const dateTarea = date.value;

    //console.log(titutloTarea, descTarea, subTarea, dateTarea);
    let mensaje = tarea.crearTarea(titutloTarea, descTarea, subTarea, dateTarea);
    vista.innerHTML = "<p>" + mensaje + "</p>"


    if (mensaje == true){
      listaTareas.push(tarea);


      let listaParaMostrar = "";
      for(i=0;i<listaTareas.length;i++) {
        listaParaMostrar += "<p>"+listaTareas[i].mostrarTarea()+"</p>"; 
      }
  
      divConfirmacion.innerHTML = listaParaMostrar;
    }

});
  