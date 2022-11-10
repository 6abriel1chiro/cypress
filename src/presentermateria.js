import Materia from "./materia";

const materiadada = document.querySelector("#nombre-materia-items");
const descripcion = document.querySelector("#descripcion-item");
const docente = document.querySelector("#docente-item");

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

const mensaje = "creada con exito !!!";
const listaMaterias = document.querySelector("#lista-materias-div");
let listaMat = []

crear.addEventListener("submit", (event) => {
  event.preventDefault();
  let materia = new Materia();
  const materia_nombre = materiadada.value;
  const descripcion_text = descripcion.value;
  const docente_text = docente.value;
  materia.crearMateria(materia_nombre,descripcion_text,docente_text);
  listaMat.push(materia);
  vista.innerHTML = "<p>" + mensaje + "<p>" +
                    "</p>";

  let listaParaMostrar = "";
  for(i=0;i<listaMat.length;i++){
    listaParaMostrar = listaParaMostrar + listaMat[i].obtenerTodosLosDatos(); 
  }
  listaMaterias.innerHTML = listaParaMostrar;
                    
});