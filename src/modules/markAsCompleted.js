import { getDataFromLocalStorage } from './local-storage.js';
import { todoCollection } from './TodoCollection.js';

const markAsCompleted = (index, key = 'todos') => {
  todoCollection.markAsCompleted(index, getDataFromLocalStorage(key));
};

export default markAsCompleted;