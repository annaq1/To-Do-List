
/* adds task right after previous one */
function addTask()
{
    var task = document.createElement("div");
    getTexts(task);
    addRemoveButton(task);
    task.classList.add("todo");

    var body = document.getElementsByTagName("body");
    body[0].appendChild(task);
}

function getTexts(task)
{
    var textArray = document.getElementsByTagName("input");

    var header = document.createElement("header");
    var h4 = document.createElement("h4");
    h4.classList.add("head");
    h4.textContent = textArray[0].value;
    header.appendChild(h4);
    task.appendChild(header);

    var descrip = document.createElement("p");
    descrip.classList.add("descrip");
    descrip.textContent = textArray[1].value;
    task.appendChild(descrip);

    var date = document.createElement("p");
    if (textArray[2].value != "")
    {
        date.classList.add("date")
        var dText = textArray[2].value.split("-");
        var str = dText[1] + "/" + dText[2] + "/" + dText[0];
        date.textContent = str;
    }
    else{
        date.textContent = "";
    }
    task.appendChild(date);

    var back_color = textArray[3].value;
    task.style.backgroundColor = back_color;

    var font_color = textArray[4].value;
    task.style.color = font_color;
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
    var x = document.getElementsByTagName("input");
    for (var i = 0; i < x.length - 2; ++i)
    {
        x[i].value = "";
    }
    /* resets color value: decide if want to do or not
    x[3].value = "#979595";
    x[4].value = "#000000";
    */
}