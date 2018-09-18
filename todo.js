
/* adds task right after previous one */
function addTask()
{
    var task = document.createElement("div");
    var text = document.createTextNode("Task");
    task.appendChild(text);
    addRemoveButton(task);
    task.classList.add("todo");

    var body = document.getElementsByTagName("body");
    body[0].appendChild(task);
}

/* creates removal button and adds to task */
function addRemoveButton(task)
{
    var button = document.createElement("button");
    var text = document.createTextNode("Remove Task");
    button.onclick = function() {removeTask(this)};
    button.classList.add("remove");
    button.appendChild(text); 
    task.appendChild(button);
}


/* removes current task */
function removeTask(button)
{
    var parent = button.parentElement;
    parent.remove();
}

function openModal()
{
    var modal = document.getElementById("myModal");
    var button = document.getElementById("add");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
}

function closeModal()
{
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function enter()
{
    addTask();
    closeModal();
}