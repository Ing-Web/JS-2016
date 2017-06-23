var newTask = document.getElementById('new-task');
var tasksContainer = document.getElementById('tasks');

newTask.addEventListener('keyup',function addTask(e){
  e.preventDefault();
  if(e.which === 13){
    var taskHTML = document.createElement('li');
    var taskEl = document.createElement('span');
    var taskCompleteEl = document.createElement('input');
    taskCompleteEl.type = "checkbox";
    taskEl.setAttribute('contenteditable','');
    taskEl.textContent = this.value;
    taskHTML.appendChild(taskCompleteEl);
    taskHTML.appendChild(taskEl);
    tasksContainer.appendChild(taskHTML);
    this.value = "";
    completeTask();
  }
});

function completeTask(){
  for(var i = 0; i < tasksContainer.children.length; i++){
    var check = tasksContainer.children[i].querySelector('input');
    check.addEventListener('change',function(){
      if(this.checked){
        //this.parentElement.remove();
        this.parentElement.style.textDecoration = 'line-through';
        this.style.display = "none";
      }
    });
  }
}

