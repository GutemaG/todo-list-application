import clearCompleted from './clearCompleted.js';
import markAsCompleted from './markAsCompleted.js';
import removeTodo from './removeTodo.js';
import { todoCollection } from './TodoCollection.js';
import updatedTodo from './updateTodo.js';

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
        <i class="fa-solid fa-trash-can delete" id="delete-${todo.index}"></i>
      </li>`;
    todosElement.appendChild(todoElement);
  });
  const checkboxs = todosElement.querySelectorAll('.checkbox');
  checkboxs.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      markAsCompleted(index + 1);
    });
  });
  const descriptions = todosElement.querySelectorAll('.description');
  descriptions.forEach((description, index) => {
    description.addEventListener('change', () => {
      updatedTodo(index + 1, description.value);
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
  const clearButton = document.querySelector('.clear-completed');
  clearButton.addEventListener('click', () => {
    clearCompleted();
    displayTodos();
  });

  const todosInputs = document.querySelectorAll('.todo');
  todosInputs.forEach((todo, index) => {
    const trash = document.querySelector(`#delete-${index + 1}`);
    trash.addEventListener('click', () => {
      removeTodo(index + 1);
      displayTodos();
    });
    todo.addEventListener('mouseover', () => {
      trash.style.display = 'inline';
    });

    todo.addEventListener('mouseout', () => {
      const trash = document.querySelector(`#delete-${index + 1}`);
      trash.style.display = 'none';
    });
  });
};

export default displayTodos;