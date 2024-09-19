document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sign-in-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`Username: ${username}\nPassword: ${password}`);
            // Add your form submission logic here
        });
    }
});
