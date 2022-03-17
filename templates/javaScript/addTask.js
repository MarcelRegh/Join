let i = 0;
function addTask() {
    let id = i++;
    let title = document.getElementById('taskTitleInput');
    let category = document.getElementById('categoryInput');
    let description = document.getElementById('descriptionInput');
    let date = document.getElementById('dateInput');
    let urgency = document.getElementById('urgencyInput');
    // let editor = document.getElementById('editorInput');
    let newTask = {
        'id': id,
        'title': title.value,
        'description': description.value,
        'category': category.value,
        'Urgancy': urgency.value,
        'date': date.value,
        // 'editor': editor.value
    };
    tasks.push(newTask);
    clearInput();
    closeAddTask();
    console.log(tasks);
}

function clearInput(){
    let title = document.getElementById('taskTitleInput');
    let category = document.getElementById('categoryInput');
    let description = document.getElementById('descriptionInput');
    let date = document.getElementById('dateInput');
    let urgency = document.getElementById('urgencyInput');
    // let editor = document.getElementById('editorInput');
    title.value = ``;
    category.value = ``;
    description.value = ``;
    date.value = ``;
    urgency.value = ``;
    // editor.value = ``;
}

function openAddTask() {
    document.getElementById('addTask').classList.remove('displayNone')
}

function closeAddTask() {
    document.getElementById('addTask').classList.add('displayNone')
}