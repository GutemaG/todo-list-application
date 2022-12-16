/*
* @jest-environment jsdom
*/

import addTodo from '../addTodo.js';
import { getDataFromLocalStorage, setLocalStorage } from '../local-storage.js';
import removeTodo from '../removeTodo.js';

describe('Testing add and remove', () => {
  test('add a todo', () => {
    const description = 'todo-1';
    const result = addTodo(description);
    const dataInLocalStorage = [
      {
        description,
        completed: false,
        index: 1,
      },
    ];
    expect(dataInLocalStorage).toEqual(result);
    setLocalStorage('todos', result);
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);

    document.body.innerHTML = '<div><ul id="todos"></ul></div>';
    const todosContainer = document.querySelector('#todos');

    for (let i = 0; i < result.length; i += 1) {
      const todo = document.createElement('li');
      todo.classList.add('todo-item');
      todo.textContent = result[i].description;
      todosContainer.appendChild(todo);
    }
    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(result.length);
  });

  test('test removing todo', () => {
    const todos = [
      { description: 'todo-1', completed: false, index: 1 },
      { description: 'todo-2', completed: false, index: 2 },
      { description: 'todo-3', completed: false, index: 3 },
      { description: 'todo-4', completed: false, index: 4 },
    ];
    setLocalStorage('todos', todos);
    removeTodo(4);
    const afterRemoving = [
      { description: 'todo-1', completed: false, index: 1 },
      { description: 'todo-2', completed: false, index: 2 },
      { description: 'todo-3', completed: false, index: 3 },
    ];
    expect(getDataFromLocalStorage('todos')).toHaveLength(afterRemoving.length);
    expect(getDataFromLocalStorage('todos')).toEqual(afterRemoving);

    document.body.innerHTML = '<div><ul id="todos"></ul></div>';
    const todosContainer = document.querySelector('#todos');

    for (let i = 0; i < afterRemoving.length; i += 1) {
      const todo = document.createElement('li');
      todo.classList.add('todo-item');
      todo.textContent = afterRemoving[i].description;
      todosContainer.appendChild(todo);
    }
    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(afterRemoving.length);
  });
});