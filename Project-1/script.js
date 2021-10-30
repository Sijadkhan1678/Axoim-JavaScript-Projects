// get DOM Elements
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Function show Error if input is empty string
function showError(input, massage) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.childNodes[5];
    small.innerText=massage;
    
};
 // funtion show succes if input is not empty
function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success'
};
// function isValidEmail(input){
// const regExp;
// }
function checkRequired(fieldArray) {
    fieldArray.forEach(field => {
        if (field.value === '') {
            console.log(field.id)
            const fieldId = field.id.charAt(0).toUpperCase() + field.id.slice(1);
            showError(field, fieldId + ' is required')
        }
    });
};
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} needs to be at least ${min} characters`)
    }
    else if (input.value > 10) {
        showError(input, `${input.id} needs to be less than ${max} characters`)
    } else {
        showSuccess(input)
    }

};
function PasswordMatach(input, input2) {
    if (input.value !== input2.value) {

        showError(input2, `Passwords don't match`)
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 10);
    checkLength(password, 6, 30);
    // checkEmail(email);
    PasswordMatach(password, password2);
})


