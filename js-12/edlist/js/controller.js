'use strict';

var newTaskEl = document.getElementById('new-task');
var tasksContainerEl = document.getElementById('tasks');
var inbox = new List('inbox');

function addTask(e) {
  var list = arguments.length <= 1 || arguments[1] === undefined ? inbox : arguments[1];

  e.preventDefault();
  if (e.which === 13) {
    var taskName = this.value;
    var newTask = new Task(taskName);
    this.value = "";
    list.addTask(newTask);
    console.table(list.tasks);
    printTask(taskName);
  }
}

function editTask() {
  var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

  var listItems = tasksContainerEl.children;

  var _loop = function _loop(i) {
    listItems[i].querySelector('span').addEventListener('blur', function () {
      list.tasks[i].name = listItems[i].querySelector('span').textContent;
      console.table(list.tasks);
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop(i);
  }
}

function completeTask() {
  var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

  var listItems = tasksContainerEl.children;

  var _loop2 = function _loop2(i) {
    listItems[i].querySelector('input').addEventListener('change', function () {
      if (listItems[i].querySelector('input').checked) {
        listItems[i].style.textDecoration = "line-through";
        listItems[i].querySelector('input').style.display = "none";
        list.tasks.splice(i, 1);
        console.table(list.tasks);
      }
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop2(i);
  }
}

newTaskEl.addEventListener('keyup', addTask);