// Destructuring de objetos:
const obj = { name: "Gustavo", sName: "Rojas" };
// Asigna a las constantes Myname y MySName los valores de las propiedas del objeto 'obj';
const { name: Myname, sName: MySName } = obj;

const obj2 = { name: "Gustavo", sName: "Rojas" };
// Cuando las propiedas de origen tienen el mismo nombre que donde se les va a asignar se puede hacer directo:
const { name, sName } = obj2;

// Destructuring de arrays:
const myArray = ["a", "b"];

// De esta manera se le puede asignar a X y Y los valores de a y b correspondientemente.
const [x, y] = myArray;

// Se pueden usar tambien let y var, no necesariamente const.
// Tambien se puede hacer destructuring de arrays u objetos anidados.
// No Necesariamente se tiene que tomar todas las propiedades para hacer destructuring.

const { x, y = 1 } = {};
// en este caso x estaria undefined y Y valdria 1.

// Elision con Destructuring
const [, , x, y] = ["a", "b", "c", "d"];
// Con elision se puede asignar los valores de 'c' y 'd'

// Rest Operator
const [x, ...y] = ["a", "b", "c"];
// Lo que hace es crear un arreglo con todos los valores restantes del array que no se hayan utilizado
// En este caso, x valdria 'a' y Y seria un arreglo con los valores ['b', 'c']

// Template string
// Permite crear un string visualmente mas atractivo y facil de entender de la siguiente manera
{
  `textHere ${value} textHere`;
}

fetch(url); // permite llamar a una API, y mandarle ciertos valores para que el servidor nos
// responda con datos requeridos dependiendo de la llamada

// De esta manera se puede ejecutar una promise, que es una llamada asincrona que puede tener
// tres estados pendiente, completada y rechazada.
let promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Exito total!");
  }, 2000);
});

console.log("Ahora Comienza");

promise
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.log(error);
  });

// Object literal value, shorthan
const txt1 = "hola";
const txt2 = "mundo";

try {
  // Es util usar un try/catch para verificar que los nombres de las varibles/constantes estan
  // esta bien escritas
  const hm = {
    txt1,
    txt2
  }; // Como se llaman de la misma manera podemos usar el object literal para asignar su valor
  // a un objeto nuevo.
} catch (error) {
  console.log("Fallo en el OBLIT");
}
