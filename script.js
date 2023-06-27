var nameError =document.getElementById('cname');
var nameErr =document.getElementById('name-err');
var phoneError =document.getElementById('telname');
var phoneErr=document.getElementById('phone-err');
var emailError =document.getElementById('cemail');
var emailErr =document.getElementById('email-err');
var passError =document.getElementById('pass');
var passErr =document.getElementById('pass-err');
var submitError =document.getElementById('sub');
var subErr =document.getElementById('form-err');



var regx = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/

function validateFullname(){
    if(nameError.value.trim()==""){
        nameErr.innerText="name is required";
        return false
    }
    else if(nameError.value.length <6){
        nameErr.innerText="More than 6 Characters";
        return false
    }
    else {
        nameErr.innerText=''
        return true
    }
}

function validatePhoneno(){
    if(phoneError.value.trim()==""){
        phoneErr.innerText="Phone no is required";
        return false
    }
    else if(phoneError.length !== 10){
        phoneErr.innerText="10 digits required";
        return false
    }
    else if(!phoneError.match(/^[0-9]{10}$/)){
        phoneErr.innerText="Only digits please";
        return false
    }
    else{
        phoneErr.innerText=''
        return true
    }
}

function validateEmail(){
    if(emailError.value.trim()==''){
        emailErr.innerText="email is required"
        return false

    } 
    else if(!emailError.value.match(regx)){
        emailErr.innerText="Email is not in correct format"
        return false
    }
    else {
        emailErr.innerText='';
        return true
} 
}

function validatePass(){
    if(passError.value.trim()==''){
        passErr.innerText="password required";
        return false
    }
    else if(passError.value.length <6){
        passErr.innerText="Password should be more than 6 character";
        return false
    }
     else{
        passErr.innerText='';
        return true
    }
}

function verify(){
    if(!validateFullname() || !validatePhoneno() || !validateEmail() || !validatePass()){
        subErr.style.display='block';
        subErr.innerText="please fix error to submit";
        setTimeout(function(){subErr.style.display= 'none';}, 3000);
        return false
    }
}



