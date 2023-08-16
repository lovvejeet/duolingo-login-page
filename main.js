document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('emailInput');
  const nextButton = document.getElementById('nextButton');
  const passwordSection = document.getElementById('passwordSection');
  const loginButton = document.getElementById('loginButton');
  const passwordInput = document.getElementById('passwordInput');
  const togglePassword = document.getElementById('toggleimage');

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      nextButton.disabled = false;
      nextButton.classList.add('active');
    } else {
      nextButton.disabled = true;
      nextButton.classList.remove('active');
    }
  });

  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.trim() !== '') {
      loginButton.disabled = false;
      loginButton.classList.add('active');
    } else {
      loginButton.disabled = true;
      loginButton.classList.remove('active');
    }
  });

  nextButton.addEventListener('click', () => {
    passwordSection.style.display = 'block';
    nextButton.style.display = 'none';
    loginButton.style.display = 'block';
  });

  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.src = 'assets/hide.svg';
    } else {
      passwordInput.type = 'password';
      togglePassword.src = 'assets/unhide.svg';
    }
  });
});
