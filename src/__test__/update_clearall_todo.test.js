/*
* @jest-environment jsdom
*/

import updatedTodo from '../modules/updateTodo.js';
import markAsCompleted from '../modules/markAsCompleted.js';

describe('Testing update, clear-completed and mark as completed', () => {
  test('testing update', () => {
    const dataInLocalStorage = [
      {
        description: 'todo-1',
        completed: false,
        index: 1,
      },
    ];
    localStorage.setItem('todos', JSON.stringify(dataInLocalStorage));
    const afterUpdated = [
      {
        description: 'Updated todo-1',
        completed: false,
        index: 1,
      },
    ];
    updatedTodo(1, 'Updated todo-1');
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(afterUpdated);

    document.body.innerHTML = '<div><ul id="todos"></ul></div>';
    const todosContainer = document.querySelector('#todos');

    for (let i = 0; i < afterUpdated.length; i += 1) {
      const todo = document.createElement('li');
      todo.classList.add('todo-item');
      todo.textContent = afterUpdated[i].description;
      todosContainer.appendChild(todo);
    }
    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(afterUpdated.length);
  });

  test('testing mark as completed', () => {
    const dataInLocalStorage = [
      {
        description: 'todo-1',
        completed: false,
        index: 1,
      },
    ];
    localStorage.setItem('todos', JSON.stringify(dataInLocalStorage));
    const afterUpdated = [
      {
        description: 'todo-1',
        completed: true,
        index: 1,
      },
    ];
    markAsCompleted(1);
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(afterUpdated);
  });

});