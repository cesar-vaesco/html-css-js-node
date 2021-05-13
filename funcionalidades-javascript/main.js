
const a = { b: 1 }

const b = a;

console.log(a === b);

/**
 * Spread operator de arrays

Este operador permite que los elementos de un array
se expandan y, de esta manera, podemos añadir un array dentro de otro
sin que el resultado sean arrays anidados, si no un
único array al que se han añadido nuevos valores.

*/

//el objeto c es un objeto independiebnte de a aunque
// contengan algunos elementos en común o que c fue creado basandose en a
const c = { ...a }

/* Promise.resolve(2)
    .then(valor => {
        console.log(`valor: ${valor}`)
    }) */

Promise.resolve(2)
    .then(valor => valor + 1)
    .then(valor => console.log(valor))
