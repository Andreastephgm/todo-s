let newTaskInput = document.getElementById("newTask");
let goButton = document.getElementById("goButton");
let taskList = document.getElementById("taskList");

taskList.innerHTML = localStorage.getItem("tasks") || "";

goButton.addEventListener("click", function() {
    let taskText = newTaskInput.value.trim(); 

    if (taskText !== "") {
        let li = document.createElement("li"); 
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="done-btn">✅</button>
            <button class="delete-btn">❌</button>
        `;
        taskList.appendChild(li);
        localStorage.setItem("tasks", taskList.innerHTML);
        newTaskInput.value = ""; 
    } else {
        alert("Write a task, please!");
    }
});

taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        localStorage.setItem("tasks", taskList.innerHTML);
    }
    if (e.target.classList.contains("done-btn")) {
        const taskSpan = e.target.parentElement.querySelector(".task-text");
        taskSpan.classList.toggle("done");
        localStorage.setItem("tasks", taskList.innerHTML);
    }
});





