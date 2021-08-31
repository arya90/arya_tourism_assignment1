function validate(){
    let email = document.getElementById("inputEmail4").value;
let password = document.getElementById("inputPassword").value;
let username = document.getElementById("inputUsername").value;
let confpassword =document.getElementById("cmdPassword").value;
let phone = document.getElementById("inputPhone").value;
let strength =document.getElementById("pass").value;
let regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{3,4})(.[a-z]{2,3})?$/;
//let phoneno= /^([0-9]{10})$/;
let mobileno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(username==""||username.trim()==""){
        document.getElementById("user").innerHTML="**Please fill the username field";
        return false;

    }
   if(username.length<=2||username.length>20){
        document.getElementById("user").innerHTML="**username must be between 2 and 20 ";
        return false;

    }
  

    if(!isNaN(user)){
       document.getElementById("user").innerHTML="**only characters are allowed";
        return false;
    }
   
   
   if(email==""||email.trim()==""){
    document.getElementById("email1").innerHTML="**Please Fill email id";
    return false; 
 }
     if(!regexp.test(email)){ 
 document.getElementById("email1").innerHTML="**email is incorrect";
    return false;
}




 if(phone==""||phone.trim()==""){
         document.getElementById("mobile").innerHTML="**Please fill the phone field";
         return false;
  }

   

 if(!mobileno.test(phone)){
    document.getElementById("mobile").innerHTML="**Phone number not valid";
return false;
}
  if(password==""||password.trim()==""){
     document.getElementById("pass").innerHTML="**Please fill the password field";
    return false;
    }
  

    if(password!==confpassword){
       document.getElementById("pass").innerHTML="**Password does not match";
        return false;
    }


    if(confpassword==""||confpassword.trim()==""){
        document.getElementById("pass1").innerHTML="**Please fill confirm password field";
        return false;
    }
  
  
    var dec1=/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/;
   var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
   if((decimal.test(password)) ||(decimal.test(confpassword))){
    document.getElementById("inputPassword").style.border=" 2px solid green";
     document.getElementById("cmdPassword").style.border="2px solid green";
   document.getElementById("pass").innerHTML='<span style="color:green">STRONG</span>';
    document.getElementById("pass1").innerHTML='<span style="color:green">STRONG</span>';
   return true;
  }
 else if((dec1.test(password))|| (dec1.test(confpassword))){
        document.getElementById("inputPassword").style.border="2px solid orange";
       document.getElementById("cmdPassword").style.border="2px solid orange";
       document.getElementById("pass").innerHTML='<span style="color:orange">MEDIUM</span>';
         document.getElementById("pass1").innerHTML='<span style="color:orange">MEDIUM</span>';
       return false;
     }
    else {
       document.getElementById("inputPassword").style.border="2px solid red";
             document.getElementById("cmdPassword").style.border="2px solid red";
           document.getElementById("pass").innerHTML='<span style="color:red">WEAK</span>';
            document.getElementById("pass1").innerHTML='<span style="color:red">WEAK</span>';
           return false;
          }
    
    
 
  
 

}
   
