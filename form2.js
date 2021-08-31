function validate(){
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password1").value;
    let regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{3,4})(.[a-z]{2,3})?$/;



    if(email==""||email.trim()==""){
        document.getElementById("email1").innerHTML="**Please Fill email id";
        return false; 
     }
        if(!regexp.test(email)){ 
     document.getElementById("email1").innerHTML="**email is incorrect";
        return false;
    }
    if(password==""||password.trim()==""){
        document.getElementById("pass").innerHTML="**Please fill the password field";
       return false;
       }
      
   
      
   
   
     
       var dec1=/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/;
      var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
      if(decimal.test(password)){
       document.getElementById("password1").style.border=" 2px solid green";
         document.getElementById("pass").innerHTML='<span style="color:green">STRONG</span>';
      
      return true;
     }
    else if(dec1.test(password)){
           document.getElementById("password1").style.border="2px solid orange";
         
          document.getElementById("pass").innerHTML='<span style="color:orange">MEDIUM</span>';
           
          return false;
        }
       else {
          document.getElementById("password1").style.border="2px solid red";
            document.getElementById("pass").innerHTML='<span style="color:red">WEAK</span>';
         return false;
             }
           
}