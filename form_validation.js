const displayMsg=(msg, idName, colorName)=>{
    document.getElementById(idName).innerHTML= msg
    document.getElementById(idName).style.color = colorName
}

const fullNameValidate=()=>{
    const fullName = document.getElementById("fname").value 
    // gets the user input from html element with Id "fname" and store it in variable called "fullname".
    // document: represents the entire html document.
    // getElementById: Used to select a single element by it's ID. 
    // .value -> Once the element is selected, .value accesses the current value of the element.
    // const fullname= .. declare a constant variable named fullname and assigns it the value obtained from the element with the id 'fname'.

    // fundamental/basic syntax logic
    // oops 
    // dsa
    // dbms
    // vcs (git, github)
    // clean code architecture 
    // consistent
    // problem solving skill

    if (fullName == ""){
        displayMsg("Full name can not be empty.", "fnameMsg", "red")
        return false
    }
   else if (fullName.length<=3){
        displayMsg("Fullname should be of more than 3 characters", "fnameMsg", "red")
        return false
    }
    else if(!fullName.match(/^([a-zA-Z\s]+$)/)){
        displayMsg("Full name must contain only alphabets.", "fnameMsg", "red")
        return false
    }
    else{
        displayMsg("Fullname is valid.", "fnameMsg", "green")
        return true
    }

}

const emailValidate=()=>{
    const email = document.getElementById("email").value
    if (email == ""){
        displayMsg("Email can not be empty.", "emailMsg", "red")
        return false
    }
    // someone123.dursikshya @ gmail . com
    else if(!email.match(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        displayMsg("Email not valid.", "emailMsg", "red")
        return false
    }
    else{
        displayMsg("Valid email", "emailMsg","green")
        return true
    }
}
const pwdValidate=()=>{
    const password = document.getElementById("pwd").value
    if (password == ""){
        displayMsg("password should not be empty.", "pwdMsg", "red")
        return false
    }

    else if(password.length<8){
        displayMsg("Password should contain at least 8 characters", "pwdMsg", "red")
        return false
    }
    // aaA123*#@&
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        displayMsg("Password is not valid.", "pwdMsg", "red")
        return false
    }
    else{
        displayMsg("Valid password", "pwdMsg", "green")
    }
}

const conPwdValidate=()=>{
    const confirmPassword = document.getElementById("conPwd").value
    const password = document.getElementById("pwd").value
    if (confirmPassword == ""){
        displayMsg("confirm password should not be empty.", "conPwdMsg", "red")
        return false
    }
    else if(confirmPassword !== password){
        displayMsg("Confirm password didn't match with password.", "conPwdMsg", "red")
        return false
    }
    else{
       displayMsg("Confirm password valid.", "conPwdMsg", "green") 
       return true
    }
}

const urlValidate=()=>{

}

const frenchNameValidate=()=>{

}



const formValidate =()=>{
    if(fullNameValidate() && emailValidate() && pwdValidate() && conPwdValidate()){
        return true
    }
    else{
     return false
    }
}



