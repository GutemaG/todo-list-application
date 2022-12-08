import { getDataFromLocalStorage } from './local-storage.js';
import { todoCollection } from './TodoCollection.js';

const displayTodos = () => {
  const todosElement = document.querySelector('#todos');
  const todos = getDataFromLocalStorage('todos');
  todosElement.innerHTML = '';
  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    todoElement.innerHTML = `
      <li class="todo">
        <input type="checkbox" id="checked" class='checkbox' ${todo.completed ? 'checked' : ''}
          >
        <input type="text" id="listItem" value= "${todo.description}">
        <i class="fa-solid fa-ellipsis-vertical move"></i>
        <i class="fa-solid fa-trash-can delete"></i>
      </li>`;
    todosElement.appendChild(todoElement);
  });
  const checkboxs = todosElement.querySelectorAll('.checkbox');
  checkboxs.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      todoCollection.markAsCompleted(index + 1);
    });
  });
};

export default displayTodos;