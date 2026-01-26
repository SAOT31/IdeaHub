const USERS_KEY = 'crudzaso_ideahub_users';
const SESSION_KEY = 'crudzaso_ideahub_session';
const THEME_KEY = 'crudzaso_ideahub_theme';

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-message');
const logoutBtn = document.getElementById('logoutBtn');
const themeToggleBtn = document.getElementById('themeToggle');

const applyTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if(themeToggleBtn) themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
};

applyTheme();

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, newTheme);
        applyTheme();
    });
}