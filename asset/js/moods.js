const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

// Refresh zamanı mövcud mövzunu bərpa edin
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = toggleThemeButton.querySelector('i');

    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Dark mode düyməsinin klik funksiyası
toggleThemeButton.addEventListener('click', () => {
    const icon = toggleThemeButton.querySelector('i');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // İşıq rejimini yadda saxla
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Qaranlıq rejimi yadda saxla
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
