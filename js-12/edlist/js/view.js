'use strict';

function printTask(name) {
  var taskLi = document.createElement('li');
  var taskSpan = document.createElement('span');
  taskSpan.setAttribute('contenteditable', '');
  taskSpan.textContent = name;
  var taskCheckbox = document.createElement('input');
  taskCheckbox.type = "checkbox";
  //var taskRemoveButton = document.createElement('button');
  //taskRemoveButton.textContent = "eliminar";
  taskLi.appendChild(taskCheckbox);
  taskLi.appendChild(taskSpan);
  //taskLi.appendChild(taskRemoveButton);
  tasksContainerEl.appendChild(taskLi);
  editTask();
  completeTask();
}