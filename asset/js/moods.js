const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = toggleThemeButton.querySelector('i');

    if (!savedTheme) {
        localStorage.setItem('theme', 'dark-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

toggleThemeButton.addEventListener('click', () => {
    const icon = toggleThemeButton.querySelector('i');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); 
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); 
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
