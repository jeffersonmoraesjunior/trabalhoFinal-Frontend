// o DOMContentLoaded verifica se todos os itens html foram carregados no site
// documento.addEventListener("DOMContentLoaded", function(){
//   const changeMode = document.getElementById("id");
// })

// Check if the user's is logged
const userLogged = localStorage.getItem('acesso');

if ((location.pathname !=='/login.html') && (userLogged === false || userLogged === null)) {
  location.replace('login.html');
}
if ((location.pathname ==='/login.html') && (userLogged)) {
  location.replace('index.html');
}

// Get the theme toggle button element
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle the dark theme
function toggleDarkTheme() {
  document.body.classList.toggle('dark-theme');  
  document.getElementById('darkmode-toggle').toggle('checked');  
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', toggleDarkTheme);

// Check if the user's theme preference is already set
const userThemePreference = localStorage.getItem('theme');

// If the preference is set, apply the theme
if (userThemePreference === 'dark') {
  document.body.classList.add('dark-theme');
  document.getElementById('darkmode-toggle').setAttribute('checked', true);
} else{    
  document.getElementById('darkmode-toggle').removeAttribute('checked', false);
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle('dark-theme');

  // Save the user's theme preference to Local Storage
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});