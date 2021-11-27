const form = document.getElementById('user-input');

function singnupHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - password must six characters or longer');
    return;
  }

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input - username must not be empty');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log('Hi, I am ' + user.userName);
}

form.addEventListener('submit', singnupHandler);