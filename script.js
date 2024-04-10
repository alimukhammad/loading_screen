function login() {
  console.log('login clicked');
  document.querySelector('.login-button').addEventListener('click', function() {
    this.classList.add('loading');
});
}

function register() {
  console.log('Register clicked');
  document.querySelector('.register-button').addEventListener('click', function() {
    this.classList.add('loading');
});
}