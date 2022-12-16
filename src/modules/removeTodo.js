import { getDataFromLocalStorage } from './local-storage.js';
import { todoCollection } from './TodoCollection.js';

const removeTodo = (index, key = 'todos') => {
  todoCollection.removeTodo(index, getDataFromLocalStorage(key));
};

export default removeTodo;
