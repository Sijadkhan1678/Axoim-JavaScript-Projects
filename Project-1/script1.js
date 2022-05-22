// get DOM Elements
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, massage) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = massage;
};

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success'
};
function isValidEmail(input) {
    const regExp;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (userName.value === '') {
        showError(userName, 'Username is required');
    }
    else {
        showSuccess(userName);
    }
    if (email.value === '') {
        showError(email, 'Email is required')
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required');

    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Confirm is required ')
    }
    else {
        showSuccess(password2);
    }
})


