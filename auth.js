document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            tab.classList.add('active');
            document.querySelector(`#${tab.dataset.tab}Form`).classList.add('active');
        });
    });

    // Password visibility toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        const passwordInput = button.previousElementSibling;
        button.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            button.classList.toggle('active');
        });
    });

    // Form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Here you would typically send the data to a server
        alert('Login functionality will be implemented with backend integration.');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!terms) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            return;
        }

        // Here you would typically send the data to a server
        alert('Signup functionality will be implemented with backend integration.');
    });

    // Social login buttons (placeholder)
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`${button.textContent} login functionality will be implemented with backend integration.`);
        });
    });
});
