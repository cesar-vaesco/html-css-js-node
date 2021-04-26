/**
 * window.onload ayuda a que nuestro archivo javascript se cargue despues
 * de que el navegador cargue el archivo / archivos html
 */

window.onload = () => {

    /* GetElementById permite obtener una referencia el contenido que tengan envuelto
       todas las etiquetas identificadas con el Id*/
    const parrafo = document.getElementById('text');

    /*
        innerHTML/ innerText permite conocer el contenido
        señalado con la función getElementById
    */
    console.log(parrafo.innerHTML);

}
