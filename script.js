console.log("code running! :)");
const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check the local storage for user preference
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
  body.classList.add('dark-mode');
}
