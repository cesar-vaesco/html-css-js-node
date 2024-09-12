//Crea un arreglo donde se van almacenar las tareas
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    //Apuntamos a la referencia donde se van agragar las tareas
    const todoList = document.getElementById('todo-list');

    //Map crea un nuevo arreglo a partir de un arreglo ya existente
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');

    //El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    todoList.innerHTML = todosTemplate.join('');

    //selccionamos todos lo elementos
    const elementos = document.querySelectorAll('#todo-list li');

    //iteramos los elementos
    elementos.forEach((elemento, i) => {
        //Agregamos un evento al elemento escuchando el evento click
        elemento.addEventListener('click', () => {

            //selecciona un elemento para poder removerlo
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizarTodos();
            //Renderiza todos los elementos
            render();
            console.log(todos, i);
        });
    });
}

const actualizarTodos= ()=>{
    const todosStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todosStrings);
}

window.onload = () => {
    render();
    const form = document.getElementById("todo-form");
    form.onsubmit = (event) => {

        event.preventDefault();

        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = '';

        //Agregar treas al arreglo todos
        todos.push(todoText);

        actualizarTodos();

        render();

    }


}
