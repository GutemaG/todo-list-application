/*
* @jest-environment jsdom
*/

import addTodo from '../addTodo.js';

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
    localStorage.setItem('todos', JSON.stringify(result));
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
});