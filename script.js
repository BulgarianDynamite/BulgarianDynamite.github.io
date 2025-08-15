function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.mode-toggle');
    body.classList.toggle('light');
    body.classList.toggle('dark');
    button.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
}
