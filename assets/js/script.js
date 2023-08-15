class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.task.push(task);
    }
}

function randomId() {
    return Math.floor(Math.random() * 9999);
}

const TaskList = TaskList();


function cleanTask() {
    document.getElementById("input1").value = "";
}

const TaskList = new TaskList();

function createTask() {
    const title = document.getElementById("input1").value = "";

    console.log(title);

    const Task = new Task(randomId(), title, false)
    TaskList.addTask(Task);

    addList();
    createTask();
}
function addList() {
    document.getElementById("button1").classList.remove("hidden");

    let showPost = '';

    TaskList.task.forEach(task => {
        showPost += `
    <div class="itemPost"></div> 
    <h2>${task.title}</h2>
    `
    });
}

