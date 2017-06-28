var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
     return estudiantes;
}

// pruebita

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var a = prompt("Nombre de la Estudiante");
    var b = prompt("Porcentaje Tecnico ");
    var c = prompt("Porcentaje Habilidades Socio-Emocionales");

    var Datos = {
     nombr:a,
     tec:b,
     hse:c
     };
     estudiantes.push(Datos);
     return Datos;

}
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var longitud = estudiantes.length - 1;
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiantes[longitud].nombr + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[longitud].tec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[longitud].hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
     var resultado = "";

     for (var i in estudiantes){
       resultado += "<div class='row'>";
       resultado += "<div class='col m12'>";
       resultado += "<div class='card blue-grey darken-1'>";
       resultado += "<div class='card-content white-text'>";
       resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombr + "</p>";
       resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].tec + "</p>";
       resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].hse + "</p>";
       resultado += "</div>";
       resultado += "</div>";
       resultado += "</div>";
       resultado += "</div>";
       }
     	 return resultado;

}




function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    for(var i in estudiantes){
      if(nombre.toLowerCase()== estudiantes[i].nombre.toLowerCase()){
     		return estudiantes[i];
     		}
   	}
  }




function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
var resultado = estudiantes.sort(function(a,b){
  return b.tec - a.tec;
});
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var resultado = estudiantes.sort(function(a,b){
      return b.hse - a.hse;
    });
}
