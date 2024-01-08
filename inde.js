function submitForm(event) {
    event.preventDefault();
    const formData = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    console.log('Form Data:', formData);
  }
  