var form = document.getElementById('myForm');
var nameMessage = document.getElementById('nameValid');
console.log(nameMessage);
var emailMessage = document.getElementById('emailValid');
var passwordMessage = document.getElementById('passwordValid');
var message = document.getElementById('messageValid');
form.addEventListener('input',function(){

});







function nameValidation(element) 
{
    var nameValue = element.value;
    nameValue     = nameValue.trim();
    if (nameValue == '') {
        nameMessage.innerHTML = "<span class='alert-danger'>Your Name is Require</span>";
    } else if (nameValue.length < 3) {
        nameMessage.innerHTML = "<span class='alert-danger'>Your Name Must be more than 3 chars</span>";
    } else {
        nameMessage.innerHTML = "";
    }
}


function emailValidation(element)
{
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailValue = element.value;
    emailValue     = emailValue.trim();
    if (emailValue == '') {
        emailMessage.innerHTML = "<span class='alert-danger'>Your Email is Require</span>";
    } else if (emailValue.length < 3) {
        emailMessage.innerHTML = "<span class='alert-danger'>Your Email Must be more than 3 chars</span>";
    } else if (! re.test(emailValue)) {
        emailMessage.innerHTML = "<span class='alert-danger'>InValid Email</span>";

    } else {
        emailMessage.innerHTML = "";
    }

}

function passwordValidation(element)
{
    var passwordValue = element.value;
    reNumber = /^(?=.*\d)/;
    reLower  = /^(?=.*[a-z])/;
    reCapital = /^(?=.*[A-Z])/;
    relessChar = /^[a-zA-Z0-9]{8,}$/;

    passwordValue     = passwordValue.trim();
    if (passwordValue == '') {
        passwordMessage.innerHTML = "<span class='alert-danger'>Your Password is Require</span>";
    } else if (relessChar.test(passwordValue)) {
        passwordMessage.innerHTML = "<span class='alert-danger'>Your Password should contain at least 8 from the mentioned characters</span>";
    } else if(! reNumber.test(passwordValue)) {
        passwordMessage.innerHTML = "<span class='alert-danger'>Your Password should contain at least one digit</span>";
    } else if(! reLower.test(passwordValue)) {
        passwordMessage.innerHTML = "<span class='alert-danger'>Your Password should contain at least one lower case</span>";
    } else if(! reCapital.test(passwordValue)) {
        passwordMessage.innerHTML = "<span class='alert-danger'>Your Password should contain at least one upper case</span>";
    } else {
        passwordMessage.innerHTML = "";
    }

}

function messageValidation(element)
{
    var messageValue = element.value;
    messageValue     = messageValue.trim();
    if (messageValue == '') {
        message.innerHTML = "<span class='alert-danger'>Your Message is Require</span>";
    } else if (messageValue.length < 3) {
        message.innerHTML = "<span class='alert-danger'>Your Name Message be more than 3 chars</span>";
    } else {
        message.innerHTML = "";
    }

}