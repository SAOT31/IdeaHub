const USERS_KEY = 'crudzaso_ideahub_users';
const SESSION_KEY = 'crudzaso_ideahub_session';
const THEME_KEY = 'crudzaso_ideahub_theme';

const path = window.location.pathname;
const isPublic = path.includes('index.html') || path.includes('register.html') || path === '/' || path.endsWith('/');
if (isPublic) {
    sessionStorage.removeItem(SESSION_KEY);
}
const userSession = sessionStorage.getItem(SESSION_KEY);

if (!isPublic && !userSession) {
    window.location.href = 'index.html';

}

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

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if(errorMsg) {
            errorMsg.textContent = '';
            errorMsg.style.display = 'none';
        }
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        const avatarUrl = document.getElementById('avatarUrl').value || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(fullName);
        
        const users = getUsers();
        
        if (users.find(user => user.email === email)) {
            if(errorMsg) {
                errorMsg.textContent = 'Error: Email already registered';
                errorMsg.style.display = 'block';
            }
            return;
        }

        users.push({
            id: Date.now(),
            fullName,
            email,
            password,
            role,
            avatarUrl,
            createdAt: new Date().toISOString(),
            ideas: 0,
            ideasList: []
        });

        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        alert('Registration successful');
        window.location.href = 'index.html';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(errorMsg) {
            errorMsg.textContent = '';
            errorMsg.style.display = 'none';
        }

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            if(errorMsg) {
                errorMsg.textContent = 'Error: Invalid credentials';
                errorMsg.style.display = 'block';
            }
            return;
        }

        sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
        window.location.href = 'ideas.html';
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = 'index.html';
    });
}
