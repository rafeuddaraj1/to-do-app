/*
 * Title: To do App
 * Description: Raw JavaScript Project With Fully Functional Way
 * Author: Rafe Uddaraj (Rafe JS)
 * Data: 9/7/2021
 */

// Selection Part
const form = document.getElementById('form');
const input = document.querySelector('#add-task');
const toDoUl = document.querySelector('#to-do-list');
const completeUl = document.querySelector('.complete-task ul');

// Count CheckBox for or id
let count = 0;

// Function

const createTask = function (task) {
  count++;
  const listItem = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `rafe${count}`;
  const label = document.createElement('label');
  label.innerHTML = task;
  label.setAttribute('for', `rafe${count}`);
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;
};

const addTask = function (event) {
  if (input.value === '') {
    alert('There are no entry');
  } else {
    event.preventDefault();
    const task = input.value;
    const listItem = createTask(task);
    toDoUl.appendChild(listItem);
    bindInCompleteTask(listItem, completeTask);
    input.value = '';
  }
};

const completeTask = function () {
  const listItem = this.parentNode;
  const btn = document.createElement('button');
  btn.innerHTML = 'Delete';
  btn.className = 'btn';
  listItem.querySelector('input[type="checkbox"]').remove();
  listItem.appendChild(btn);
  completeUl.appendChild(listItem);
  bindCompleteTask(listItem, deleteTask);
};

const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
};

const bindInCompleteTask = function (taskItem, checkBoxClicked) {
  const checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkBoxClicked;
};
const bindCompleteTask = function (taskItem, deleteTask) {
  const checkBox = taskItem.querySelector('.btn');
  checkBox.onclick = deleteTask;
};

// Invoke Part

for (let i = 0; i < toDoUl.children.length; i++) {
  bindInCompleteTask(toDoUl.children[i], completeTask);
}
for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteTask(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);


function local() {
    
}