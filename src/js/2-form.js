let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form');

// Setting up the "input" event listener"
form.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.elements.email.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    formData.message = event.target.elements.message.value;
  }
  const jsonObject = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', jsonObject);
});

// Verifying if there is any data in local storage
const dataInLocalStorage = localStorage.getItem('feedback-form-state');
if (dataInLocalStorage) {
  formData = JSON.parse(dataInLocalStorage);
  const input = document.querySelector('input[name="email"]');
  const textarea = document.querySelector('textarea[name="message"]');
  input.value = formData.email;
  textarea.value = formData.message;
}

// Setting up the "submit" event listener
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log('actual email', formData.email);
    console.log('actual message', formData.message);

    // Clearing  the Local Storage and Object
    localStorage.removeItem('feedback-form-state');

    formData = {
      email: '',
      message: '',
    };

    // Resetting all inputs in the form
    form.reset();
  }
});
