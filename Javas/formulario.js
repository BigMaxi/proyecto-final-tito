// Obtener los valores del formulario
const 1 = document.getElementById("nombre").value;
const 2 = document.getElementById("cara1").value;
const 3 = document.getElementById("cara2").value;
const 4 = document.getElementById("cara3").value;
const 5 = document.getElementById("imagen").value;

// Crear un objeto con la información del personaje
const character = {
    Nombre: 1,
    caracteristica1: 2,
    caracteristica2: 3,
    caracteristica3: 4,
    imagen: 5,
   

// Convertir el objeto a una cadena JSON
const characterJSON = JSON.stringify(character);

// Guardar la cadena JSON en LocalStorage
localStorage.setItem("characterData", characterJSON);

// Puedes usar un nombre de clave diferente según tus necesidades


// Obtener la cadena JSON almacenada en LocalStorage
const characterJSON = localStorage.getItem("characterData");

// Convertir la cadena JSON de nuevo a un objeto
const character = JSON.parse(characterJSON);

// Utilizar los datos como desees
console.log(character.name); // Acceder al nombre del personaje, por ejemplo
