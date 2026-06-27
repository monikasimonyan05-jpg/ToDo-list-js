const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const li = document.createElement("li");
        li.textContent = taskText;

        // Ավարտված / չավարտված
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Ջնջելու կոճակ
        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.className = "deleteBtn";

        delBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            li.classList.add("fadeOut");

            li.addEventListener("transitionend", () => {
                li.remove();
            });
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }
});