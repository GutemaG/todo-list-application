// import addTodo from './addTodo.js';
import { todoCollection } from './TodoCollection.js';

const displayTodos = () => {
  const todosElement = document.querySelector('#todos');
  const todos = todoCollection.getTodos();
  todosElement.innerHTML = '';
  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    todoElement.innerHTML = `
      <li class="todo">
        <input type="checkbox" id="checked" class='checkbox' ${todo.completed ? 'checked' : ''}
          >
        <input type="text" id="listItem" class='description' value= "${todo.description}">
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
  const descriptions = todosElement.querySelectorAll('.description');
  descriptions.forEach((description, index) => {
    description.addEventListener('change', () => {
      todoCollection.updateDescription(index + 1, description.value);
    });
  });
  const formContainer = document.querySelector('#add-new-form-container');
  formContainer.innerHTML = `
    <form class="add-new-task" action="">
      <input type="text" id="todo" name="description" placeholder="Add to your list..." />
      <button id="add-todo" type="button">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
  </form>
  `;
  const form = formContainer.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = form.description.value;
    todoCollection.addTodo(description);
    form.description.value = '';
    displayTodos();
  });
};

export default displayTodos;