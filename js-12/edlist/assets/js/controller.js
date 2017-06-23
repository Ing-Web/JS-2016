var newTaskEl = document.getElementById('new-task');
var tasksContainerEl = document.getElementById('tasks');
var inbox = new List('inbox');

function addTask(e,list = inbox){
  e.preventDefault();
  if(e.which === 13){
    var taskName = this.value;
    var newTask = new Task(taskName);
    this.value = "";
    list.addTask(newTask);
    console.table(list.tasks);
    printTask(taskName);
  }
}


function editTask(list = inbox){
  var listItems = tasksContainerEl.children;
  for(let i = 0; i < listItems.length; i++){
    listItems[i].querySelector('span').addEventListener('blur', () =>{
      list.tasks[i].name = listItems[i].querySelector('span').textContent;
      console.table(list.tasks);
    })
  }
}

function completeTask(list = inbox){
  var listItems = tasksContainerEl.children;
  for(let i = 0; i < listItems.length; i++){
    listItems[i].querySelector('input').addEventListener('change', () =>{
      if(listItems[i].querySelector('input').checked){
        listItems[i].style.textDecoration = "line-through";
        listItems[i].querySelector('input').style.display = "none";
        list.tasks.splice(i,1);
        console.table(list.tasks);
      }
    })
  }
}


newTaskEl.addEventListener('keyup', addTask);
