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

export default checkComplete;