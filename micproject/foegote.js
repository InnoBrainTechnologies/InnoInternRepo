document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const resetStatus = document.getElementById('reset-status');

    forgotPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        setTimeout(function () {
            resetStatus.textContent = `Password reset instructions sent to ${email}.`;
        }, 1500);
    });
});
