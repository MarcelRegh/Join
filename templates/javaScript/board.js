let tasks = [
    {
        'id': 0,
        'title': 'Programieren',
        'description': 'Test ob es funktioniert open',
        'category': 'open'
    },
    {
        'id': 1,
        'title': 'Programieren',
        'description': 'Test ob es funktioniert inProgress',
        'category': 'inProgress'
    },
    {
        'id': 2,
        'title': 'Programieren',
        'description': 'Test ob es funktioniert testing',
        'category': 'testing'
    },
    {
        'id': 3,
        'title': 'Programieren',
        'description': 'Test ob es funktioniert done',
        'category': 'done'
    },
];

let dragging;

function updateHTML() {
    renderOpenTasks();
    renderTasksInProgress();
    renderTestingTasks();
    renderDoneTasks();
}

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
    <div class="taskCard" draggable="true" ondragstart="drag(${element['id']})">
        <div class="taskCardHeader">
            <b><span id="title">${element['title']}</span></b>
        </div>
        <div class="taskCardDescription">
            <span id="description">${element['description']}</span>
        </div>
        <div class="taskCardFooter">
            <img src="/assets/Einhorn1.png">
        </div>
    </div>
    `;
}

function drag(id) {
    dragging = id;
}

function drop(category) {
    tasks[dragging]['category'] = category;
    updateHTML();
}

function allowDrop(ev) {
    ev.preventDefault();
}