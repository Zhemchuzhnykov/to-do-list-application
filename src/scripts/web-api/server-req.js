/* eslint-disable prettier/prettier */
const serverUrl = 'https://6355617a483f5d2df3b34166.mockapi.io/tasklist/tasks';

/**
 * gets all the tasks from the database
 * @return {Promise} promise containing the list of tasks in PromiseResult
 */
export const getTaskList = () => {
  return fetch(serverUrl).then(response => response.json());
};

/**
 * sets a new task to the database
 * @return {Promise} promise containing the added task
 */
export const createTask = taskData => {
  return fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

/**
 * updates a task in the database
 * @return {void}
 */
export const changeTask = (updatedTask, id) => {
  return fetch(`${serverUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTask),
  });
};

/**
 * deletes a task in the database
 * @return {void}
 */
export const deleteTask = id => {
  return fetch(`${serverUrl}/${id}`, {
    method: 'DELETE',
  });
};
