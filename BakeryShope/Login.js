
const loginApi = `http://localhost:8500/login`;



async function loginForm(e) {
    e.preventDefault()

    const email = document.querySelector("#userEmail").value.trim();
    const password = document.querySelector("#userPassword").value.trim();

      if(email.indexOf("@")<=0){
     
        document.getElementById("message").innerHTML="Invalid Email By @";
        return false;
    }
    else if(email.charAt(email.length-4)!=="." && email.charAt(email.length-3)!=="."){
      document.getElementById("message").innerHTML="Invalid Email by . com/.in domain";
      return false;
    }


    if(password!==null){
      if(password.trim()===""){
        console.log('pls enter the value...')
      }else if(password.length>8 && password.length>20){
         console.log("pls enter the correct lenght...");
      }else{
        const hasUpperCase = /[A-Z]/.test(password);
         const hasLowerCase = /[A-Z]/.test(password);
          const hasNumber = /[0-9]/.test(password);
          const hasSpecialChar = /[!#$%&* (),.?:{}|<>/.]/.test(password); 

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



    let formObject = {
        email,
        password
    }

    try {
        let response = await fetch(loginApi, {
            method: 'POST',
            body: JSON.stringify(formObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await response.json();
        console.log( data);
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));

        if (data.accessToken) {
            window.location = 'Cookies.html'
        }

    } catch (error) {
        console.log( error);
    }

}
const Loginbutton = () => {
    window.location = 'Login.html'
}
const sighup = () => {
    window.location = 'Singhpage.html'
}

