// Get references to form and input elements
const form = document.querySelector('.contact-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const checkBox = document.getElementById('checkbox');
const msgBox = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.querySelectorAll('.error-message');

// Reference to the success toast
const successToast = document.getElementById('toast');

submitBtn.addEventListener('click', (e) => {
  let hasError = false; // This flag checks if any error occurs

  // First Name
  if (firstName.value.trim() === "") {
    errorMsg[0].style.display = 'block'; // Show error if empty
    hasError = true;
  } else {
    errorMsg[0].style.display = 'none'; // Hide error if valid
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

  // Query type (Radio buttons)
  const selectedRadio = document.querySelector('input[name="query-type"]:checked');
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

  // Checkbox (terms and conditions)
  if (!checkBox.checked) {
    errorMsg[5].style.display = 'block';
    hasError = true;
  } else {
    errorMsg[5].style.display = 'none';
  }

  // If there’s an error, prevent form from submitting
  if (hasError) {
    e.preventDefault();
    return; // stop here if any validation fails
  }

  // No errors: show success toast and clear form
  e.preventDefault(); // stop real submission for demo/testing

  // Show the success toast
  successToast.classList.add('show');

  // Hide the toast after 3 seconds
  setTimeout(() => {
    successToast.classList.remove('show');
  }, 3000);

  // Optionally clear the form
  form.reset();
});

// Save input values to localStorage on change
[firstName, lastName, emailAddress, msgBox].forEach((input) => {
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, input.value);
  });
});

// Save checkbox
checkBox.addEventListener('change', () => {
  localStorage.setItem('checkbox', checkBox.checked);
});

// Save radio buttons
const radioButtons = document.querySelectorAll('input[name="query-type"]');
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    localStorage.setItem('query-type', radio.value);
  });
});

// Restore form values on page load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('first-name')) {
    firstName.value = localStorage.getItem('first-name');
  }
  if (localStorage.getItem('last-name')) {
    lastName.value = localStorage.getItem('last-name');
  }
  if (localStorage.getItem('email')) {
    emailAddress.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('message')) {
    msgBox.value = localStorage.getItem('message');
  }
  if (localStorage.getItem('checkbox') === 'true') {
    checkBox.checked = true;
  }
  if (localStorage.getItem('query-type')) {
    const selectedValue = localStorage.getItem('query-type');
    const selectedRadio = document.querySelector(`input[name="query-type"][value="${selectedValue}"]`);
    if (selectedRadio) selectedRadio.checked = true;
  }
});