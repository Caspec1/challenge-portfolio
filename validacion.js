//Haz tú validación en javascript acá
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const asuntoInput = document.querySelector('#asunto');
const messageInput = document.querySelector('#message');
const errorName = document.querySelector('#error-name');
const errorEmail = document.querySelector('#error-email');
const errorAsunto = document.querySelector('#error-asunto');
const errorMessage = document.querySelector('#error-message');
const submitButton = document.querySelector('#submit-button');
const labelName = document.querySelector('#label-name');
const labelEmail = document.querySelector('#label-email');
const labelAsunto = document.querySelector('#label-asunto');
const labelMessage = document.querySelector('#label-message');

nameInput.addEventListener('input', (e) => {
    if (e.target.value.trim().length > 0) {
        errorName.innerHTML = '';
        nameInput.classList.remove('input-error');
        labelName.classList.remove('label-error');
        submitButton.disabled = false;
    } else {
        errorName.innerHTML = 'El nombre es obligatorio';
        nameInput.classList.add('input-error');
        labelName.classList.add('label-error');
        submitButton.disabled = true;
    }
})

emailInput.addEventListener('input', (e) => {
  if (e.target.value.trim().length > 0) {
      errorEmail.innerHTML = '';
      emailInput.classList.remove('input-error');
      labelEmail.classList.remove('label-error');
      submitButton.disabled = false;
  } else {
      errorEmail.innerHTML = 'El email es obligatorio';
      emailInput.classList.add('input-error');
      labelEmail.classList.add('label-error');
      submitButton.disabled = true;
  }
})

asuntoInput.addEventListener('input', (e) => {
  if (e.target.value.trim().length > 0) {
      errorAsunto.innerHTML = '';
      asuntoInput.classList.remove('input-error');
      labelAsunto.classList.remove('label-error');
      submitButton.disabled = false;
  } else {
      errorAsunto.innerHTML = 'El asunto es obligatorio';
      asuntoInput.classList.add('input-error');
      labelAsunto.classList.add('label-error');
      submitButton.disabled = true;
  }
})

messageInput.addEventListener('input', (e) => {
  if (e.target.value.trim().length > 0) {
      errorMessage.innerHTML = '';
      messageInput.classList.remove('input-error');
      labelMessage.classList.remove('label-error');
      submitButton.disabled = false;
  } else {
      errorMessage.innerHTML = 'El mensaje es obligatorio';
      messageInput.classList.add('input-error');
      labelMessage.classList.add('label-error');
      submitButton.disabled = true;
  }
})

