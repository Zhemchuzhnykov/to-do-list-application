/* eslint-disable no-param-reassign */
import { renderTasks } from './tasks-render.js';
import { getTaskList, changeTask } from '../web-api/server-req.js';

/**
 * Handles the change of the task status, adds a look for done and undone tasks
 * @return {void}
 */
export const taskStatusChange = event => {
  if (!event.target.classList.contains('list-item__checkbox')) {
    return;
  }

  const targetTaskId = event.target.closest('.list-item').dataset.id;

  let tasksList;

  getTaskList()
    .then(data => {
      tasksList = data;
    })
    .then(() => {
      const { text, creationTime, done, doneTime } = tasksList.find(
        task => task.id === targetTaskId,
      );

      const updatedData = {
        text,
        creationTime,
        done: !done,
        doneTime: doneTime ? null : new Date().toISOString(),
      };

      return changeTask(updatedData, targetTaskId);
    })
    .then(() => {
      renderTasks();
    })
    .catch(err => {
      console.error(
        `The task with the ID ${targetTaskId} has not been updated because of the error: ${err}`,
      );
    });
};
