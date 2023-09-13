import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
let userData = {};

getSavedData();

formEl.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(evt) {
  userData[evt.target.name] = evt.target.value;

  localStorage.setItem('STORAGE_KEY', JSON.stringify(userData));
}

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('STORAGE_KEY')));
  formEl.reset();
  localStorage.removeItem('STORAGE_KEY');
}

function getSavedData() {
  const savedData = localStorage.getItem('STORAGE_KEY');
  if (savedData) {
    inputEl.value = JSON.parse(savedData).email;
    textareaEl.value = JSON.parse(savedData).message;
  }
}
