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
        // Se limpia el arreglo con la iguiente instrucción
        // para evitar que el ciclo for vuelva  pintar las tareas y antes
        // agregadas
        todoList.innerHTML = '';
        //El ciclo for permite agregar la lista no ordenadas de tareas
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += '<li> ' + todos[i] + '</li>';
        }
        console.log(todos);
    }


}
