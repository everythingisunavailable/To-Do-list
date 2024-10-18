const d = new Date();
document.getElementById("data").textContent = d.toDateString();
let unconfirmedTask = false;

function addTask() {
    if (unconfirmedTask) {
        alert("Please confirm the current task!");
        return;
    }

    unconfirmedTask = true;
    let parentDiv = document.getElementById("parentDiv");
    let newTaskDiv = document.createElement("div");
    newTaskDiv.className = 'task';
    newTaskDiv.id = 'remove';

    // Textarea
    let newText = document.createElement("textarea");
    newText.id = 'text';
    newText.setAttribute("maxlength", "60");
    newText.setAttribute("autofocus", "");
    newText.textContent = "Add a new task...";
    newText.setAttribute("rows", "1");

    // Confirm button
    let confirmButton = document.createElement("button");
    confirmButton.id = 'confirmButton';
    confirmButton.innerHTML = 'Confirm';
    confirmButton.addEventListener("click", confirm);
    newTaskDiv.appendChild(newText);
    newTaskDiv.appendChild(confirmButton);
    parentDiv.appendChild(newTaskDiv);
}

function removeTasks() {
    unconfirmedTask = false;

    let parentDiv = document.getElementById("parentDiv");
    parentDiv.innerHTML = '';

    let newDiv = document.createElement("div");
    newDiv.id = 'parentDiv';
    let gjyshiDiv = document.getElementById("gjyshi");
    gjyshiDiv.appendChild(newDiv);
}

function confirm() {
    unconfirmedTask = false;

    let userInput = document.getElementById("text").value;
    let newTextDiv = document.createElement("div");
    newTextDiv.className = 'textDiv';
    newTextDiv.id = 'textDiv';
    newTextDiv.textContent = userInput;

    // Replace text box with just text
    let textBox = document.getElementById("text");
    textBox.replaceWith(newTextDiv);

    // Change confirmButton to task Done button
    let confirmButton = document.getElementById("confirmButton");
    let doneButton = document.createElement("button");
    doneButton.innerHTML = "Complete!";
    doneButton.id = 'doneButton';
    doneButton.className = 'doneButton';
    doneButton.addEventListener("click", completeTask); 
    confirmButton.replaceWith(doneButton);
}

function completeTask() {
    let doneButton = this;
    let taskDiv = doneButton.parentElement;
    let strikeDiv = document.createElement("div");
    strikeDiv.className = 'strike';

    let textDiv = taskDiv.querySelector(".textDiv");  

    let newTextDiv = document.createElement("div");
    newTextDiv.className = 'textDiv';
    newTextDiv.id = 'doneTextDiv';
    newTextDiv.textContent = textDiv.textContent;

    strikeDiv.appendChild(newTextDiv);
    taskDiv.replaceWith(strikeDiv);

    // sound
    let sound = new Audio('images/scribble.mp3');
    sound.play();
}

