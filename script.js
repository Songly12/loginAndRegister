const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signUp');

// Show sign-in form by default, hide sign-up
if (signInForm && signUpForm) {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
}

if (signUpButton) {
    signUpButton.addEventListener('click', function () {
        if (signInForm && signUpForm) {
            signInForm.style.display = "none";
            signUpForm.style.display = "block";
        }
    });
}
if (signInButton) {
    signInButton.addEventListener('click', function () {
        if (signInForm && signUpForm) {
            signInForm.style.display = "block";
            signUpForm.style.display = "none";
        }
    });
}