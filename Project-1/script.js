// get DOM Elements
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Function show Error if input is empty string
function showError(input, massage) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.childNodes[5];
    small.innerText=massage;
    
};
 // funtion show succes if input is not empty
function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success'
};
function checkRequired(fieldArray) {
    fieldArray.forEach(field => {
        if (field.value === '') {
            console.log(field.id);
            const fieldId = field.id.charAt(0).toUpperCase() + field.id.slice(1);
            showError(field, fieldId + ' is required');
        }
        else{
         showSuccess(field)
        }
    });
};
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input,`${input.id} needs to be at least ${min} characters`);
    }
    else if (input.value > 10) {
        showError(input,`${input.id} needs to be less than ${max} characters`);
    } else {
        showSuccess(input);
    }

};
function checkEmail(input) {
    let value= input.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(value.trim()) && value.indexOf('.') < value.length - 3) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid Email`);
    }
}
function PasswordMatch(input1,input2) {
    if (input1.value!==input2.value) {
        console.log(input2.value)
        console.log(input1.value)
        showError(input2,"Passwords don't match");
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([userName,email,password,password2]);
    checkLength(userName,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    PasswordMatch(password,password2);
})


