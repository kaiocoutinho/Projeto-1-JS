// Função de adicionar tarefa
function addTask() {
    // titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {
        //colar template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
        
        // adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover classes desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        //adicionar evento de remover
        const remove = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        });

        //adicionar evento de completar tarefa

        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this);
        })
         
        //limpar texto
        document.querySelector('#task-title').value = '';
    }

}

//funçao de remover
function removeTask(task){
    task.parentNode.remove(true)
}

// função remover tarefa
function completeTask(task){
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle('done')  //toggle == se o elemnto estiver sem o done por exemplo o toggle coloca, se o elemento estiver com o done o toggle remove
}



// evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    addTask()
})