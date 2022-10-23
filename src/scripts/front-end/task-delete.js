/* eslint-disable prettier/prettier */
import { deleteTask } from '../web-api/server-req.js';
import { renderTasks } from './tasks-render.js';

/**
 * handles task deletion from UI
 * @return {void}
 */
export const removeTask = event => {
  if (!event.target.classList.contains('list-item__deleteBtn')) {
    return;
  }

  const targetTaskId = event.target.closest('.list-item').dataset.id;

  deleteTask(targetTaskId)
    .then(() => {
      renderTasks();
    })
    .catch(err => {
      console.error(`The task has not been deleted because of the error: ${err}`);
    });
};
