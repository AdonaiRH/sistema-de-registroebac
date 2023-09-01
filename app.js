document.addEventListener("DOMContentLoaded", function(){



//Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de Registro de Alumnos");

var form = document.getElementById("registration-form");
var addButton = document.getElementById("add-button");
var consultButton = document.getElementById("consult-button");
var deleteButton = document.getElementById("delete-button");

form.addEventListener("submit",incluir);

consultButton.addEventListener("click",consultar);

deleteButton.addEventListener("click", eliminarAlumno);


//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [                    

    //Se muestra lista de alumnos por medio de objetos
    {nombre: "Salvador Mora",edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "salvadormora@ebac.mx" },
    {nombre: "Maria Hubert",edad: "34", zonaResidencia: "Edo Mx", nombrePrograma: "Desarrollo back End con Python", email: "maria@ebac.mx"},
    {nombre: "Adonai Rivas",edad: "32", zonaResidencia: "Cuernavaca", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "adonairh@hotmail.com"},
    {nombre: "Oliver Barajas",edad: "33", zonaResidencia: "CDMX", nombrePrograma: "Desarrollo back End con Python", email: "breiquer666@hotmail.com"},
    {nombre: "Irmin Muñoz",edad: "30", zonaResidencia: "Oaxtepec", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "dark_comedy64@hotmail.com"}
];

//Funcion que permite agregar un nuevo alumno al arreglo de registro
function incluir(){                 

    //Se le solicita informacion al usuario para el registro de un nuevo alumno
    var nombre = document.getElementById("name-input"); 
    var zonaResidencia = document.getElementById("locality-input");
    var edad = document.getElementById("age-input");
    var nombrePrograma = document.getElementById("course-input");
    var email = document.getElementById("email-input");

    //Crea un objeto que se llama nuevoAlumno con los datos ingresados
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};

    //Agrega la informacion nuevoAlumno al arreglo
    registro.push(nuevoAlumno);

}

//Funcion para consultar los registros de los alumnos
function consultar(){           
    
    //Este ciclo for itera sobre cada uno de los registros del arreglo
    ///for(var i = 0; i < registro.length; i++){

        //Esta lista de console.log permite ver al usuario el registro en la consola
      ///  console.log("Nombre: " + registro[i].nombre);
        ///console.log("Edad: " + registro[i].edad);
        ///console.log("Zona de residencia: " + registro[i].zonaResidencia);
        ///console.log("Nombre del programa: " + registro[i].nombrePrograma);
        ///console.log("Email: " + registro[i].email);
      ///};
      console.table(registro);

}

//Esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeleminar = prompt("Ingresa el nombre del alumno a eleminar");

    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eleminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeleminar);

}

//Ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion
//do{

    //Variable que toma la eleccion del usuario para ejecutar la funcion indicada
    var opcion = prompt("Seleccione una opcion:\n1. Agregar Registro\n2. Consultar registro de alumno \n3. Eliminar registro\n4. Salir");                   //Ventana de opciones del programa

//Se declara este if para dar a elegir al usuario la opcion que quiera
//if(opcion === "1"){                 
  //  incluir();
//}else if(opcion === "2"){
 //   consultar();
//}else if(opcion === "3"){
//    eliminarAlumno();
//}else if(opcion === "4"){
//    alert("Salir del sistema");
//} else{
//    alert("Opcion invalida, elige otra");
//} 

//Esta variable nos permite elegir si hacemos otra accion o cerramos el ciclo
//var continuar = prompt("¿Deseas hacer otra accion? (S/N)");                 
 
//while que se encarga de cerrar el ciclo
//} while(continuar === "s");
//
})





