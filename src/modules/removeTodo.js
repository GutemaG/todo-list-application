import { todoCollection } from './TodoCollection.js';

const removeTodo = () => todoCollection.clearCompleted();

export default removeTodo;