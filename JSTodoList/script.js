let toDoInput = document.querySelector('#toDo');
let toDoInsertButton = document.querySelector('#toDoInsertButton');
let toDoTable = document.querySelector('#toDoTable');
let toDoListValue = document.querySelector('#toDoListValue');
let toDoDeleteButton = document.querySelector('#toDoDeleteButton');
let toDoData = [];

function addEvents() {
    toDoInsertButton.addEventListener('click', insertToDo);
}

function getToDoData() {
    let toDoData = JSON.parse(localStorage.getItem('toDoData'));
    if (toDoData === null || toDoData.length === 0) {
        return [];
    } else {
        return toDoData;
    }
}

function setToDoData(value) {
    if (value === null) {

    } else {
        let toDoData = getToDoData();
        toDoData.push(value);
        localStorage.setItem('toDoData', JSON.stringify(toDoData));
    }
}

function showToDoData() {
    let data = getToDoData();
    if (data !== null && data.length > 0) {
        data.forEach((item, index) => {
            let parsedItem = JSON.parse(item);
            toDoTable.children[0].innerHTML += `
        <tr>
            <td id="toDoListValue" onclick="completeToDo(event)">${parsedItem.ticket}</td>
            <td><button id="toDoDeleteButton" onclick="deleteToDo(event,${index})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>       
        `;
        });
    } else {

    }
}

function insertToDo() {
    if (toDoInput.value.trim() === "") {
        alert('Veri girişi yapin');
    }
    else {
        toDoTable.children[0].innerHTML += `
        <tr>
        <td id="toDoListValue" onclick="completeToDo(event)">${toDoInput.value}</td>
        <td><button id="toDoDeleteButton" onclick="deleteToDo(event)" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>       
        `
        let model = { ticket: toDoInput.value.trim() };
        setToDoData(JSON.stringify(model));
        toDoInput.value = "";
        toDoInput.focus();
    }
}

function deleteToDo(event, index) {
    event.target.closest('tr').remove();
    if (index !== -1) {
        toDoData = getToDoData();
        toDoData.splice(index, 1);
        localStorage.setItem('toDoData', JSON.stringify(toDoData));
    }
}

function completeToDo(event) {
    console.log(event.target.classList.toggle("line-through"));
}

document.addEventListener("DOMContentLoaded", () => {
    addEvents();
    showToDoData();
});