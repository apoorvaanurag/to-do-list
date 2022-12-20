'use strict';

const body = document.querySelector('body');
const container = document.querySelector('.container');
const dateNow = document.querySelector('.date');
const dayNow = document.querySelector('.day');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todos');
const deleteBtn = document.querySelector('.delete');
const checkBtn = document.querySelector('.check');
const darkModeBtn = document.querySelector('.fas');

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUNE',
  'JULY',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

const now = new Date();

dateNow.innerHTML = ` ${now.getDate().toString().padStart(2, '0')} ${
  months[now.getMonth()]
} ${now.getFullYear().toString()}`;

dayNow.innerHTML = `${days[now.getDay()]}`;

darkModeBtn.addEventListener('click', function () {
  if (darkModeBtn.classList.contains('fa-moon')) {
    darkModeBtn.classList.add('fa-sun');
    darkModeBtn.classList.remove('fa-moon');
  } else {
    darkModeBtn.classList.add('fa-moon');
    darkModeBtn.classList.remove('fa-sun');
  }

  body.classList.toggle('dark-body');
  container.classList.toggle('dark-container');
  todoInput.classList.toggle('todo-input-dark');
});

const addTodo = function (e) {
  e.preventDefault();

  const html = `<div class="todo"> 
  <input type="checkbox" class="check" />${todoInput.value}
   <span class="delete">&times;</span>
 </div>
  `;
  todoList.insertAdjacentHTML('afterbegin', html);
  todoInput.value = '';

  document
    .querySelector('.delete')
    .addEventListener(
      'click',
      e => (e.target.parentElement.style.display = 'none')
    );

  document.querySelector('.check').addEventListener('click', e => {
    e.target.checked
      ? e.target.parentElement.classList.add('checked')
      : e.target.parentElement.classList.remove('checked');
  });
};
todoButton.addEventListener('click', addTodo);
