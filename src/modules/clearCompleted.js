import { getDataFromLocalStorage } from './local-storage.js';
import { todoCollection } from './TodoCollection.js';

const clearCompleted = (key = 'todos') => todoCollection.clearCompleted(getDataFromLocalStorage(key));

export default clearCompleted;