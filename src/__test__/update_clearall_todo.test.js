/*
* @jest-environment jsdom
*/

import updatedTodo from '../modules/updateTodo.js';
import markAsCompleted from '../modules/markAsCompleted.js';
import clearCompleted from '../modules/clearCompleted.js';

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
  test('testing clear completed', () => {
    const dataInLocalStorage = [
      {
        description: 'todo-1',
        completed: false,
        index: 1,
      },
      {
        description: 'todo-2',
        completed: true,
        index: 2,
      },
      {
        description: 'todo-3',
        completed: false,
        index: 3,
      },
      {
        description: 'todo-4',
        completed: true,
        index: 4,
      },
    ];
    localStorage.setItem('todos', JSON.stringify(dataInLocalStorage));
    const afterClearCompleted = [
      {
        description: 'todo-1',
        completed: false,
        index: 1,
      },
      {
        description: 'todo-3',
        completed: false,
        index: 2,
      },
    ];
    clearCompleted();
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(afterClearCompleted);
    document.body.innerHTML = '<div><ul id="todos"></ul></div>';
    const todosContainer = document.querySelector('#todos');

    for (let i = 0; i < afterClearCompleted.length; i += 1) {
      const todo = document.createElement('li');
      todo.classList.add('todo-item');
      todo.textContent = afterClearCompleted[i].description;
      todosContainer.appendChild(todo);
    }
    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(afterClearCompleted.length);
  });
});