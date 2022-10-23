import { renderTasks } from './tasks-render.js';
import { createTask, getTaskList } from '../web-api/server-req.js';

const newTaskField = document.querySelector('.task-input');

/**
 * Adds a new task to the database on the server
 * @return {void}
 */
export const addNewTask = () => {
  const text = newTaskField.value;
  let taskId;

  if (text.length === 0) {
    return;
  }

  const newTask = {
    text,
    creationTime: new Date().toISOString(),
    done: false,
  };

  createTask(newTask)
    .then(() => {
      renderTasks();
    })
    .catch(err => {
      console.error(`A new task has not been created because of the error: ${err}`);
    });

  newTaskField.value = '';
};
