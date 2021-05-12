//Crea un arreglo donde se van almacenar las tareas
const todos = [];

window.onload = () => {

    const form = document.getElementById("todo-form");
    form.onsubmit = (event) => {

        event.preventDefault();

        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = '';

        //Agregar treas al arreglo todos
        todos.push(todoText);
        //Apuntamos a la referencia donde se van agragar las tareas
        const todoList = document.getElementById('todo-list');

        //Map crea un nuevo arreglo a partir de un arreglo ya existente
        const todosTemplate = todos.map(t => '<li>' + t + '</li>');

        //El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
        todoList.innerHTML = todosTemplate.join('');

        const elementos = document.querySelectorAll('#todo-list li');

        elementos.forEach((elemento, i) =>{
            elemento.addEventListener('click', () =>{
                console.log(elemento, i);

            })
        })
    }


}
