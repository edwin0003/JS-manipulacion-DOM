(() => {

    const btn = document.querySelector('[data-form-btn]')

    console.log(btn);

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input')
        const value = input.value;
        const list = document.querySelector('[data-list]')
        const task = document.createElement('li')
        task.classList.add('card');
        input.value = "";

        const taskContent = document.createElement('div')
        const titleTask = document.createElement('span')

        titleTask.classList.add("task")
        titleTask.innerText = value

        taskContent.appendChild(checkComplete())
        taskContent.appendChild(titleTask)

        task.appendChild(taskContent)
        list.appendChild(task)
        console.log(value);
    }

    const checkComplete = () => {
        const i = document.createElement("i")
        i.classList.add("far", "fa-check-square", "icon")
        i.addEventListener("click", completeTask)
        return i;
    }

    const completeTask = (event) => {
        const elemt = event.target;
        elemt.classList.toggle("fas")
        elemt.classList.toggle("completeIcon")
        elemt.classList.toggle("far")
    }
    btn.addEventListener("click", createTask)
})();