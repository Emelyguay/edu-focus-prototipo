// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // =================================================================
    // FUNCIONALIDAD 1: CAMBIO DE TEMA (MODO CLARO/OSCURO)
    // =================================================================
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            if (themeSwitcher) {
                themeSwitcher.textContent = 'Cambiar a Modo Claro';
            }
        } else {
             body.removeAttribute('data-theme');
             if (themeSwitcher) {
                themeSwitcher.textContent = 'Cambiar a Modo Oscuro';
            }
        }
    };

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            let currentTheme = body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.removeItem('theme');
                themeSwitcher.textContent = 'Cambiar a Modo Oscuro';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeSwitcher.textContent = 'Cambiar a Modo Claro';
            }
        });
    }

    applyStoredTheme();

    // =================================================================
    // FUNCIONALIDAD 2: VALIDACIÓN DEL FORMULARIO DE LOGIN (index.html)
    // =================================================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const errorMessagesDiv = document.getElementById('error-messages');
            let errors = [];

            if (emailInput.value === '' || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
                errors.push('Por favor, introduce un correo electrónico válido.');
            }
            if (passwordInput.value === '') {
                errors.push('La contraseña es obligatoria.');
            }

            if (errors.length > 0) {
                errorMessagesDiv.innerHTML = errors.join('<br>');
                errorMessagesDiv.classList.remove('d-none');
            } else {
                errorMessagesDiv.classList.add('d-none');
                alert('¡Inicio de sesión exitoso! Redirigiendo al panel...');
                window.location.href = 'dashboard.html';
            }
        });
    }

    // =================================================================
    // FUNCIONALIDAD 3: GUARDAR CAMBIOS DEL PERFIL CON TOAST (settings.html)
    // =================================================================
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        const toastElement = document.getElementById('confirmationToast');
        const toast = new bootstrap.Toast(toastElement);

        profileForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitamos que la página se recargue
            toast.show(); // Mostramos el toast
        });
    }

    // =================================================================
    // FUNCIONALIDAD 4: CERRAR SESIÓN
    // =================================================================
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.clear();
            alert('Has cerrado la sesión. ¡Hasta pronto!');
            window.location.href = 'index.html';
        });
    }
});