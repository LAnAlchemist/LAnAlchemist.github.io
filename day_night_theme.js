document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    // Check if night mode is already enabled in localStorage
    if (localStorage.getItem('night-mode') === 'enabled') {
        body.classList.add('night-mode');
        toggleButton.textContent = 'Day';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('night-mode')) {
            body.classList.remove('night-mode');
            toggleButton.textContent = 'Night';
            localStorage.setItem('night-mode', 'disabled');
        } else {
            body.classList.add('night-mode');
            toggleButton.textContent = 'Day';
            localStorage.setItem('night-mode', 'enabled');
        }
    });
});