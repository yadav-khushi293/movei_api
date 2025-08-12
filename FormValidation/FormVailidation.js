
function myform() {
    let userName = document.getElementsByName("user").value;
    let  password = document.getElementsByName("pass").value;
    let confirmPassword= document.getElementsByName("confpass").value;
    let mobile = document.getElementsByName("mobile_number").value;
     let  email  = document.getElementsByName("email").value;

    if(userName  == ""){
        document.getElementById("username_msg").innerHTML="**** Please fill the userName field";
        return false;

    }else if(userName.length<=2 || userName.length>20){
       document.getElementById("username_msg").innerHTML="** Please enter the length between 2 to 20";
       return false;
    }else if(!isNaN("userName")){
        document.getElementById("username_msg").innerHTML="**Only characters are allowed ";
        return false;
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
  }

  //confirPass Validation

  if (confirmPassword == "") {
    document.getElementById("confpass_msg").innerHTML =" ** Please fill the confirmPassword field";
    return false;
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
  }
}


