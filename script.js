var nameError =document.getElementById('cname');
var nameErr =document.getElementById('name-err');
var phoneError =document.getElementById('telname');
var phoneErr=document.getElementById('phone-err');
var emailError =document.getElementById('cemail');
var emailErr =document.getElementById('email-err');
// var passError =document.getElementById('pass');
// var passErr =document.getElementById('pass-err');
var submitError =document.getElementById('sub');
var subErr =document.getElementById('form-err');



var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

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
    var cleanedPhoneNumber = phoneError.value.replace(/[^\d]/g, '');
    // console.log(`${phoneError.value} hi`);
    // console.log(`${cleanedPhoneNumber}`);
    if(phoneError.value.trim()==""){
        phoneErr.innerText="Phone no is required";
        return false;
    }
   
    else if(!/^[\d.\-\/\s]+$/.test(phoneError.value)){
        phoneErr.innerText="Only digits please";
        return false;
    }
    
    
    
    else if(cleanedPhoneNumber.length !== 10){
        // console.log(`${cleanedPhoneNumber.length}`)
        phoneErr.innerText="10 digits required";
        return false;
    }
    else if (!/^(\d{3}[-.\s]?){2}\d{4}$/.test(phoneError.value)) {
        // console.log("hi");
        phoneErr.innerText = "Invalid phone number format";
        return false;
    }

    
    else{
        phoneErr.innerText='';
        return true;
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

function validatePass() {
    var passwordInput = document.getElementById("pass");
    var passErr = document.getElementById("pass-err");
  
    var password = passwordInput.value;
    var validationResult = validatePassword(password);
      
    passErr.innerText = validationResult.strength;
    passErr.style.color = validationResult.color;
    return passErr;
  }
  
  function validatePassword(password) {
    var passwordStrength = "";
    var passwordColor = "";
  
    if (password.length < 8) {
      passwordStrength = "minimum 8 characters";
      passwordColor = "red";
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      passwordStrength = "Medium";
      passwordColor = "orange";
    } else {
      passwordStrength = "Strong";
      passwordColor = "green";
    }
  
    return { strength: passwordStrength, color: passwordColor };
  }
  

function verify(){
    var passCheck = validatePass();
    if(!validateFullname() || !validatePhoneno() || !validateEmail() || passCheck.innerText != "Strong"){
        console.log(`${passCheck.innerText}`)
        subErr.style.display='block';
        subErr.innerText="please fix error to submit";
        setTimeout(function(){subErr.style.display= 'none';}, 3000);
        return false
    }
}



