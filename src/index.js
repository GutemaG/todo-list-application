import addTodo from './modules/addTodo.js';
import displayTodos from './modules/displayTodos.js';
import pageLayout from './modules/pageLayout.js';
import './style.css';

window.onload = displayTodos();
pageLayout();
addTodo();
