let tasks = [];
let backlogDiv;

async function loadTasks() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
};

async function init() {
    backlogDiv = document.getElementById('backlog');
    await loadTasks();
    generateHTMLComponents();
}

function generateHTMLComponents() {
    backlogDiv.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        backlogDiv.innerHTML += `  <div class="content">
    <div class="assigned">
        <img src="" alt="">
         <div class="name">
            <p></p>
        </div>
    </div>
    <div class="width17" id="title">${task['title']}</div>
    <div class="width17">${task['category']}</div>
    <p class="width17">${task['description']}</p>
    <p class="width17">${task['date']}</p>
    <p class="width17">${task['Urgancy']}</p>
    </div>`
    };
};

function deleteTask(i) {
    tasks = JSON.parse(backend.getItem('tasks'));
    tasks.splice(i, 1);
    backend.setItem('tasks', JSON.stringify(tasks));
    init();

}


/*
  <div class="content">
                <div class="assigned">
                    <img src="" alt="">

                    <div class="name">
                        <p></p>
                    </div>
                </div>
                <div class="width17" id="title">ss</div>
                <div class="width17">ss</div>
                <p class="width17">dd</p>
                <p class="width17">dd</p>


            </div>
*/