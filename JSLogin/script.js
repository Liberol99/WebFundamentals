let LoginForm = document.querySelector('#login-form');
let LoginButton = document.querySelector('#login-form button');
let LoginToRegisterSpan = document.querySelector('#login-form span');

let RegisterForm = document.querySelector('#register-form');
let RegisterButton = document.querySelector('#register-form button');
let RegisterToLoginSpan = document.querySelector('#register-form span');

let Users = [];

function GoToRegister() {
    LoginForm.classList.remove('d-block');
    LoginForm.classList.add('d-none');

    RegisterForm.classList.remove('d-none');
    RegisterForm.classList.add('d-block');
}

function GoToLogin() {
    RegisterForm.classList.remove('d-block');
    RegisterForm.classList.add('d-none');

    LoginForm.classList.remove('d-none');
    LoginForm.classList.add('d-block');
}

function RegisterToForm(event) {
    event.preventDefault();
    Users = JSON.parse(localStorage.getItem('Users'));
    if (Users === null || Users.length <= 0) Users = [];
    let RegisterAvatar = document.querySelector('#register-avatar').value.trim();
    let RegisterEmail = document.querySelector('#register-email').value.trim();
    let RegisterPassword = document.querySelector('#register-password').value.trim();
    if (RegisterAvatar === "" || RegisterEmail === "" || RegisterPassword === "") {
        alert('boş geçmeyin');
        return;
    }
    if (Users.some(user => user.email === RegisterEmail)) {
        alert('mail zaten var !');
        return;
    }
    let User = { avatar: RegisterAvatar, email: RegisterEmail, password: RegisterPassword };
    Users.push(User);
    localStorage.setItem('Users', JSON.stringify(Users));
}

function LoginToForm(event) {
    event.preventDefault();
    Users = JSON.parse(localStorage.getItem('Users'));
    let LoginEmail = document.querySelector('#login-email').value.trim();
    let LoginPassword = document.querySelector('#login-password').value.trim();
    if (LoginEmail === "" || LoginPassword === "") {
        alert('boş geçmeyin');
        return;
    }
    if (Users !== null && Users.length > 0) {
        let User = Users.find(function (item) {
            return item.email === LoginEmail && item.password === LoginPassword;
        });
        if (User) {
            LoginForm.classList.remove('d-block');
            LoginForm.classList.add('d-none');
            let h1 = document.createElement('h1');
            h1.className = "text-center text-white display-4";
            h1.innerText = `Hoşgeldin ${User.avatar}`;
            let div = document.querySelector('.custom-div');
            div.append(h1);
        }
    }
}

function addEvents() {
    LoginButton.addEventListener('click', LoginToForm);
    LoginToRegisterSpan.addEventListener('click', GoToRegister);
    RegisterButton.addEventListener('click', RegisterToForm);
    RegisterToLoginSpan.addEventListener('click', GoToLogin);
}

window.onload = function () {
    addEvents();
};