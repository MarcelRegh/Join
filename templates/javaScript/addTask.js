let state;

async function addTask() {
    let title = document.getElementById('taskTitleInput');
    let category = document.getElementById('categoryInput');
    let description = document.getElementById('descriptionInput');
    let date = document.getElementById('dateInput');
    let urgency = document.getElementById('urgencyInput');
    // let editor = document.getElementById('editorInput');
    let newTask = {
        'id': new Date().getTime(),
        'title': title.value,
        'description': description.value,
        'category': category.value,
        'Urgancy': urgency.value,
        'date': date.value,
        'status': state,
        // 'editor': editor.value
    };
    tasks.push(newTask);
    clearInput();
    await saveTasks();
    closeAddTask();
    updateHTML();
    console.log(tasks);
}

function clearInput(){
    document.getElementById('taskTitleInput').value = ``;;
    document.getElementById('categoryInput').value = ``;;
    document.getElementById('descriptionInput').value = ``;;
    document.getElementById('dateInput').value = ``;;
    document.getElementById('urgencyInput').value = ``;;
}

async function saveTasks() {
    // users.push('John');
    await backend.setItem('tasks', JSON.stringify(tasks));
};

function openAddTask(param) {
    state = param;
    document.getElementById('addTask').classList.remove('displayNone')
}

function closeAddTask() {
    document.getElementById('addTask').classList.add('displayNone')
    state = ``; 
}