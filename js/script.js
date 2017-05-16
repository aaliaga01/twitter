function agregar(){

	//Paso 1
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value="";

	//paso2
	var cont = document.getElementById("contenedor");

	//paso3
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	
	//paso4
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//paso5
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	//paso6
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	//paso7
	chck.addEventListener("click", function (){
		elementoContenedor.classList.toggle("tachado");
	})

	//paso8
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	})

	if(tareas == null || tareas.length == 0){
		alert("¡Error! Debe ingresar tarea");
		return false;
	}
	
}







