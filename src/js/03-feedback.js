import throttle from 'lodash.throttle';

const formSubmit = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const textAreaInput = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));

formSubmit.addEventListener('submit', isFormSubmit);
formSubmit.addEventListener('input', throttle(onFormValue), 500);

if (savedValue.email) {
  populateInputValue();
}
if (savedValue.message) {
  populateTextAreaValue();
}

function onFormValue(e) {
  formData[e.target.name] = e.target.value;
  const stringValue = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringValue);
}

function populateInputValue(e) {
  emailInput.value = savedValue.email;
  formData.email = savedValue.email;
}

function populateTextAreaValue(e) {
  textAreaInput.value = savedValue.message;
  formData.message = savedValue.message;
}

function isFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
