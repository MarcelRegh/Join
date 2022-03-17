let dragging;

async function updateHTML() {
    await loadTasks();
    renderOpenTasks();
    renderTasksInProgress();
    renderTestingTasks();
    renderDoneTasks();
}

async function loadTasks() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
};

function renderOpenTasks() {
    let open = tasks.filter(t => t['category'] == 'open');
    document.getElementById('toDo').innerHTML = ``;
    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('toDo').innerHTML += generateTaskHTML(element);
    }
}

function renderTasksInProgress() {
    let inProgress = tasks.filter(t => t['category'] == 'inProgress');
    document.getElementById('inProgress').innerHTML = ``;
    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('inProgress').innerHTML += generateTaskHTML(element);
    }
}

function renderTestingTasks() {
    let testing = tasks.filter(t => t['category'] == 'testing');
    document.getElementById('testing').innerHTML = ``;
    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += generateTaskHTML(element);
    }
}

function renderDoneTasks() {
    let done = tasks.filter(t => t['category'] == 'done');
    document.getElementById('done').innerHTML = ``;
    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += generateTaskHTML(element);
    }
}

function generateTaskHTML(element) {
    return `
    <div id="newTask${element['id']}" class="taskCard ${element['Urgancy']}" draggable="true" ondragstart="drag(${element['id']})">
        <div class="taskCardHeader">
            <b><span id="title">${element['title']}</span></b>
        </div>
        <div class="taskCardDescription ${element['Urgancy']}">
            <span id="description">${element['description']}</span>
        </div>
        <div class="taskCardFooter ${element['Urgancy']}">
            <div class="taskCardEditors"><img src="/assets/Einhorn1.png"></div>
            <div class="taskCardOptions" onclick="deleteTask(${i})"><img src="/assets/icons8-müll-24.png"></div>
        </div>
    </div>
    `;
}

async function deleteTask(i) {
    tasks['category'] = 'delete';
    await saveTasks();
    updateHTML();
}

function drag(id) {
    dragging = id;
}

async function drop(category) {
    tasks[dragging]['category'] = category;
    await saveTasks();
    updateHTML();
}

function allowDrop(ev) {
    ev.preventDefault();
}