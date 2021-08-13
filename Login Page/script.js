const input = document.getElementsByTagName("input");
const p = document.getElementsByTagName("p");
let checkClick = false;

p[0].style.color = "blue";
p[1].style.color = "blue";
function ValidateEmail(){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!input[0].value.length){
        p[0].innerText = 'This field is required!'
        return false;
    }
    else if(!input[0].value.match(mailformat)){
        p[0].innerText = "Invalid email address!";
        return false;
    }
    else{
        p[0].innerText = '';
        return true;
    }
}
function ValidatePassword(){
    let passwordformat = /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]+/;
    if(!input[1].value.length){
        p[1].innerText = 'This field is required!'
        return false;
    }
    else if(input[1].value.length<8){
        p[1].innerText = "Should contain at least 8 characters";
        return false;
    }
    else if(!(passwordformat.test(input[1].value))){
        p[1].innerText = "Should contain at least one digit,one lower case,one upper case";
        return false;
    }
    else{
        p[1].innerText = '';
        return true;
    }
}
let email,password;
function login() {
    email = ValidateEmail();
    password = ValidatePassword();
    checkClick = true;
    if(email && password){
        alert('You are successfully logged in!')
    }
}

// input[0].addEventListener('input',change);
// input[1].addEventListener('input',change);
function change () {
    if(checkClick){
        ValidateEmail();
        ValidatePassword();
    }
    
}