import { getDataFromLocalStorage } from './local-storage.js';

const displayTodos = () => {
  const todosElement = document.querySelector('#todos');
  const todos = getDataFromLocalStorage('todos');
  todosElement.innerHTML = '';
  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    todoElement.innerHTML = `
      <li class="todo">
        <input type="checkbox" id="checked" ${todo.completed ? 'checked' : ''} >
        <input type="text" id="listItem" value= "${todo.description}">
        <i class="fa-solid fa-ellipsis-vertical move"></i>
        <i class="fa-solid fa-trash-can delete"></i>
      </li>`;
    todosElement.appendChild(todoElement);
  });
};

export default displayTodos;