const loginForm = document.querySelector("#login-form");
const loginUsername = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const CLASS_HIDDEN = 'hidden';
const USERNAME_KEY = 'username';

function welcomeMessage(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        loginForm.classList.add(CLASS_HIDDEN);
        const username = loginUsername.value;
        localStorage.setItem(USERNAME_KEY, username);
        welcomeMessage(username);
    });
} else {
    welcomeMessage(savedUsername);
}