import { getDataFromLocalStorage } from './local-storage.js';
import { todoCollection } from './TodoCollection.js';

const updatedTodo = (index, description, key = 'todos') => (
  todoCollection.updateDescription(index, description, getDataFromLocalStorage(key))
);

export default updatedTodo;