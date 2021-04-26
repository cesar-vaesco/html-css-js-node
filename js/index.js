

/* function iterar(arg1) {

    for (let i = 0; i < arg1.length; i++) {

        console.log(arg1[i])

    }
}
const numeros = [1, 2, 'hola', 4, 5];
const nombres = ['Pedro', 'Juan', 'Felipe', 'Feliz', 'Triste'];

iterar( numeros );
iterar( nombres );

 */

/* function suma(a, b) {
    return a + b;
}

const resultadoSuma = suma(1, 2);
const resultadoSuma2 = suma(5, 6);
const resultadoSuma3 = suma(resultadoSuma, resultadoSuma2);

console.log('Resultado suma: ', resultadoSuma);
console.log('Resultado suma2: ', resultadoSuma2);
console.log('Resultado suma3: ', resultadoSuma3);
 */

function sumar(a, b, cb) {
    const result = a + b;
    cb(result);
}

function callback(result) {
    console.log("Resultado: ", result);
}


sumar(2, 3, callback);
