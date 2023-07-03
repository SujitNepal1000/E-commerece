const signupButton = document.getElementById('signupButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const signupForm = document.getElementById('signupForm');

signupButton.addEventListener('click', openSignupForm);
closeButton.addEventListener('click', closeSignupForm);
signupForm.addEventListener('submit', submitSignupForm);

function openSignupForm() {
  overlay.style.display = 'block';
}

function closeSignupForm() {
  overlay.style.display = 'none';
}

function submitSignupForm(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

 
}
