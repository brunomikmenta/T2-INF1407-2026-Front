window.addEventListener('https://t2-inf1407-2026-back.onrender.com/', () => {
    const authBtn = document.getElementById('auth-btn');
    const perfilBtn = document.getElementById('perfil-btn');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    if (perfilBtn) {
        perfilBtn.href = './perfil.html';
    }
    if (!authBtn) {
        return;
    }
    if (isLoggedIn) {
        authBtn.textContent = 'Logout';
        authBtn.href = '#';
        authBtn.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('username');
            window.location.href = './login.html';
        });
    }
    else {
        authBtn.textContent = 'Login';
        authBtn.href = './login.html';
    }
});
export {};
