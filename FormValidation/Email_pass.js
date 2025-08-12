function myFunctions(e){
    e.preventDefault();

    let email=document.myForm.email.value;
    let pass=document.myForm.pass.value;

    if(email.indexOf("@")<=0){
     
        document.getElementById("message").innerHTML="Invalid Email By @";
        return false;
    }
    else if(email.charAt(email.length-4)!=="." && email.charAt(email.length-3)!=="."){
      document.getElementById("message").innerHTML="Invalid Email by . com/.in domain";
      return false;
    }


    if(pass!==null){
      if(pass.trim()===""){
        console.log('pls enter the value...')
      }else if(pass.length>8 && pass.length>20){
         console.log("pls enter the correct lenght...");
      }else{
        const hasUpperCase = /[A-Z]/.test(pass);
         const hasLowerCase = /[A-Z]/.test(pass);
          const hasNumber = /[0-9]/.test(pass);
          const hasSpecialChar = /[!#$%&* (),.?:{}|<>/.]/.test(pass); 

          if(!hasUpperCase){
            console.log("Password must inclued at least one Upper Letter");
          }else if(!hasLowerCase)
            {
            console.log("Password must inclued at least one Lower Letter");
          }  else if(!hasNumber)
            {
             console.log("Password must inclued at least one Number");
          }else if(!hasSpecialChar)
          {
           console.log("Password must inclued at least hasSpecialChar")
          }
          else{
            console.log("Password is valid...");
          }
      }
    }

}