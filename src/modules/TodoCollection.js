import { getDataFromLocalStorage } from './local-storage.js';
import Todo from './Todo.js';

export default class TodoCollection {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo(description) {
    const index = this.todos.length + 1;
    const todo = new Todo({ description, index });
    this.todos.push(todo);
    this.setToLocalStorage(this.todos);
    return this.todos;
  }

  removeTodo(index, todos) {
    this.todos = todos.filter((todo) => todo.index !== index);
    this.resetIndex();
  }

  setToLocalStorage(todos) {
    this.todos = todos;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  resetIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.setToLocalStorage(this.todos);
  }

  clearCompleted(todos) {
    this.todos = todos;
    this.todos = this.todos.filter((todo) => todo.completed !== true);
    this.setToLocalStorage(this.todos);
    this.resetIndex();
  }

  markAsCompleted(index, todos) {
    this.todos = todos;
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].index === index) {
        this.todos[i].completed = !this.todos[i].completed;
        this.setToLocalStorage(this.todos);
        break;
      }
    }
  }

  updateDescription(index, description, todos) {
    this.todos = todos;
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].index === index) {
        this.todos[i].description = description;
        this.setToLocalStorage(this.todos);
        break;
      }
    }
    return this.todos;
  }
}

const todoCollection = new TodoCollection(getDataFromLocalStorage('todos'));

export { todoCollection };