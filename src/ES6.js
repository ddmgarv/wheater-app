// Destructuring de objetos:
const obj = {name: 'Gustavo', sName: 'Rojas'};
// Asigna a las constantes Myname y MySName los valores de las propiedas del objeto 'obj';
const {name: Myname, sName: MySName} = obj;

const obj2 = {name: 'Gustavo', sName: 'Rojas'};
// Cuando las propiedas de origen tienen el mismo nombre que donde se les va a asignar se puede hacer directo:
const {name, sName} = obj2;

// Destructuring de arrays:
const myArray = ['a', 'b'];

// De esta manera se le puede asignar a X y Y los valores de a y b correspondientemente.
const [x, y] = myArray;

// Se pueden usar tambien let y var, no necesariamente const.
// Tambien se puede hacer destructuring de arrays u objetos anidados.
// No Necesariamente se tiene que tomar todas las propiedades para hacer destructuring.

const {x ,y = 1} = {};
// en este caso x estaria undefined y Y valdria 1. 

// Elision con Destructuring
const [, , x, y] = ['a', 'b', 'c', 'd'];
// Con elision se puede asignar los valores de 'c' y 'd' 

// Rest Operator 
const [x, ...y] = ['a', 'b', 'c'];
// Lo que hace es crear un arreglo con todos los valores restantes del array que no se hayan utilizado
// En este caso, x valdria 'a' y Y seria un arreglo con los valores ['b', 'c']

// Template string
// Permite crear un string visualmente mas atractivo y facil de entender de la siguiente manera
{`textHere ${value} textHere`};