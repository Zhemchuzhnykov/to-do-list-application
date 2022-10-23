import { renderTasks } from './front-end/tasks-render.js';
import { taskStatusChange } from './front-end/task-status.js';
import { addNewTask } from './front-end/task-create.js';
import { removeTask } from './front-end/task-delete.js';

const toDoList = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');

toDoList.addEventListener('click', taskStatusChange);
toDoList.addEventListener('click', removeTask);
createButton.addEventListener('click', addNewTask);
window.addEventListener('DOMContentLoaded', renderTasks);
