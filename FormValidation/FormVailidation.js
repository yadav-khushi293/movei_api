
function myform(e) {
    e.preventDefault();
    let userName = document.getElementById("user").value;
    let  password = document.getElementById("pass").value;
    let confirmPassword= document.getElementById("confpass").value;
    let mobile = document.getElementById("mobile_number").value;
     let  email  = document.getElementById("email").value;

    if(userName  == ""){
        document.getElementById("username_msg").innerHTML="**** Please fill the userName field";
        return false;

    }else if(userName.length<=2 || userName.length>20){
       document.getElementById("username_msg").innerHTML="** Please enter the length between 2 to 20";
       return false;
    }else if(!isNaN("userName")){
        document.getElementById("username_msg").innerHTML="**Only characters are allowed ";
        return false;
    }else{
        
      document.getElementById("username_msg").innerHTML="";
    }


    //Pass Validation

      if (password == "") {
    document.getElementById("pass_msg").innerHTML =" ** Please fill the password field";
    return false;

  } else if (password.length <= 5 || password.length > 20) {
    document.getElementById("pass_msg").innerHTML =" ** Please enter the length between 5 to 20";
    return false;

  } else if (password != confirmPassword) {
    document.getElementById("confpass_msg").innerHTML =" ** Password Not Matched";
    return false;
  }else{
    document.getElementById("pass_msg").innerHTML ="";
  }

  //confirPass Validation

  if (confirmPassword == "") {
    document.getElementById("confpass_msg").innerHTML =" ** Please fill the confirmPassword field";
    return false;
  }
  
  else{
        document.getElementById("confpass_msg").innerHTML ="";
  }

  //mobileNumber validation

  if (mobile == "") {
    document.getElementById("mobile_msg").innerHTML =" ** Please fill the mobile field";
    return false;
  } else if (isNaN(mobile)) {
    document.getElementById("mobile_msg").innerHTML = " ** Please enter a digit not a characters.";
    return false;
  } else if (mobile.length != 10) {
    document.getElementById("mobile_msg").innerHTML =" ** Mobile number must be a 10 digit.";
    return false;
  }else{
        document.getElementById("mobile_msg").innerHTML ="";
  }


  //email validation

  if (email == "") {
    document.getElementById("email_msg").innerHTML =" ** Please fill the email field";
    return false;

  } else if (email.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = " ** @ Invalid Position.";
    return false;
  }

  //   mehfoozkhan@gmail.in //length 19
  else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = " **  Invalid Position.";
    return false;
  }else{
    document.getElementById("email_msg").innerHTML ="";
  }
  
}


