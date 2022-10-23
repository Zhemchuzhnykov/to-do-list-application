/* eslint-disable prettier/prettier */
import { getTaskList } from '../web-api/server-req.js';

const listElem = document.querySelector('.list');

/**
 * sorts tasks in a correct order
 * @return {number}
 */
const compareTasks = (a, b) => {
  // sorting by completion
  if (a.done < b.done) return -1;
  if (a.done > b.done) return 1;

  // sorting by time of completion
  if (a.doneTime < b.doneTime) return 1;
  if (a.doneTime > b.doneTime) return -1;

  // sorting by time of addition
  if (a.creationTime < b.creationTime) return 1;
  if (a.creationTime > b.creationTime) return -1;
};

/**
 * renders tasks to the web document
 * @return {void}
 */
export const renderTasks = () => {
  let tasksList;

  getTaskList()
    .then(data => {
      tasksList = data;
    })
    .then(() => {
      listElem.innerHTML = '';

      listElem.append(
        ...tasksList.sort(compareTasks).map(task => {
          const { text, done } = task;

          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item', 'list-item');
          listItemElem.setAttribute('data-id', task.id);

          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.checked = done;
          checkbox.classList.add('list-item__checkbox');

          const textEl = document.createElement('span');
          textEl.classList.add('list-item__text');
          textEl.textContent = text;
          if (done) {
            textEl.classList.add('list-item__text_done');
          }

          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('list-item__deleteBtn');

          listItemElem.append(checkbox, textEl, deleteBtn);

          return listItemElem;
        }),
      );
    })
    .catch(err => {
      console.error(`The layout was not rendered because of the error: ${err}`);
    });
};
