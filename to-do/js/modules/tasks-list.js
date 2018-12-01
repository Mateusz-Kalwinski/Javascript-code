function showTasks(){
    tasks.forEach(function(title){
        addNewTask(title);
    });
}

function toggleTaskComlete(task){
    task.classList.toggle('btn-success');
}
function deleteTask(task){
    var  liToDelite = task.closest('li');
    task.closest('ul').removeChild(liToDelite);
}
