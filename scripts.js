// Simulate a login process
const users = {
  user1: {
    username: 'admin',
    password: 'password',
  },
};

// Cache DOM elements
const loginPage = document.getElementById('login-page');
const portalPage = document.getElementById('portal-page');
const courseContentPage = document.getElementById('course-content-page');
const errorMessage = document.getElementById('error-message');
const logoutButton = document.getElementById('logout-btn');
const exploreButton = document.getElementById('explore-btn');
const backButton = document.getElementById('back-to-portal-btn');

// Check login status on page load
window.addEventListener('load', function () {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    loginPage.classList.remove('active');
    portalPage.classList.add('active');
  }
});

// Handle login submission
document.getElementById('login').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === users.user1.username && password === users.user1.password) {
    loginPage.classList.remove('active');
    portalPage.classList.add('active');
    localStorage.setItem('isLoggedIn', 'true');
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Invalid username or password!';
  }
});

// Show course content page when 'Explore' button is clicked
exploreButton.addEventListener('click', function () {
  portalPage.classList.remove('active');
  courseContentPage.classList.add('active');
});

// Back to portal page when 'Back to Portal' button is clicked
backButton.addEventListener('click', function () {
  courseContentPage.classList.remove('active');
  portalPage.classList.add('active');
});

// Handle logout
logoutButton.addEventListener('click', function () {
  portalPage.classList.remove('active');
  loginPage.classList.add('active');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  errorMessage.textContent = '';
  localStorage.setItem('isLoggedIn', 'false');
});

// Event delegation for accordion functionality
document.addEventListener('click', function (event) {
  if (event.target.matches('.accordion')) {
    event.target.classList.toggle('active');
    const panel = event.target.nextElementSibling;
    panel.classList.toggle('show');
  }
});
