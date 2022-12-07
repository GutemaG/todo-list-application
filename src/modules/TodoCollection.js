import { getDataFromLocalStorage } from './local-storage.js';
import Todo from './Todo.js';

export default class TodoCollection {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo(description) {
    const index = this.todos.length;
    const todo = new Todo({ description, index });
    this.todos.push(todo);
    this.setToLocalStorage();
  }

  removeTodo(index) {
    this.todos = this.todos.filter((book, bookIndex) => bookIndex !== index);
    this.setToLocalStorage();
  }

  setToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos;
  }
}

const todoCollection = new TodoCollection(getDataFromLocalStorage('todos'));

export { todoCollection };