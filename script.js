const form = document.querySelector('.contact-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const checkBox = document.getElementById('checkbox');
const msgBox = document.getElementById('message');
const errorMsg = document.querySelectorAll('.error-message');
const successToast = document.getElementById('toast');

// Form Validation
form.addEventListener('submit', (e) => {
  let hasError = false;

  // First Name
  if (firstName.value.trim() === "") {
    errorMsg[0].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[0].style.display = 'none';
  }

  // Last Name
  if (lastName.value.trim() === "") {
    errorMsg[1].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[1].style.display = 'none';
  }

  // Email
  if (emailAddress.value.trim() === "") {
    errorMsg[2].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[2].style.display = 'none';
  }

  // Radio Button
  const selectedRadio = document.querySelector('input[name="Query Type"]:checked');
  if (!selectedRadio) {
    errorMsg[3].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[3].style.display = 'none';
  }

  // Message
  if (msgBox.value.trim() === "") {
    errorMsg[4].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[4].style.display = 'none';
  }

  // Checkbox
  if (!checkBox.checked) {
    errorMsg[5].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[5].style.display = 'none';
  }

  if (hasError) {
    e.preventDefault(); // Stop form submission
    return;
  }

  // Success toast
  successToast.classList.add('show');
  setTimeout(() => {
    successToast.classList.remove('show');
  }, 3000);
});

// LocalStorage: Save
[firstName, lastName, emailAddress, msgBox].forEach((input) => {
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, input.value);
  });
});

checkBox.addEventListener('change', () => {
  localStorage.setItem('checkbox', checkBox.checked);
});

const radioButtons = document.querySelectorAll('input[name="Query Type"]');
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    localStorage.setItem('query-type', radio.value);
  });
});

// LocalStorage: Restore
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('first-name')) firstName.value = localStorage.getItem('first-name');
  if (localStorage.getItem('last-name')) lastName.value = localStorage.getItem('last-name');
  if (localStorage.getItem('email')) emailAddress.value = localStorage.getItem('email');
  if (localStorage.getItem('message')) msgBox.value = localStorage.getItem('message');
  if (localStorage.getItem('checkbox') === 'true') checkBox.checked = true;

  const selected = localStorage.getItem('query-type');
  if (selected) {
    const selectedRadio = document.querySelector(`input[name="Query Type"][value="${selected}"]`);
    if (selectedRadio) selectedRadio.checked = true;
  }
});
