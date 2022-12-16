const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  if (data) {
    data = JSON.parse(data);
    return data;
  }
  return [];
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getTodoFromLocalStorage = (index, key) => (
  getDataFromLocalStorage(key).filter((todo) => todo.index === index) || []
);

export { getDataFromLocalStorage, setLocalStorage, getTodoFromLocalStorage };
