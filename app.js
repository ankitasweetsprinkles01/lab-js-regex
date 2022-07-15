/* Fill your code*/
function formValidate(){
    var name = document.forms['RegForm']['Name'];
    var email = document.forms['RegForm']['EMail'];
    var address = document.forms["RegForm"]["Address"];
    var password = document.forms["RegForm"]["Password"];
    var confirmPassword = document.forms["RegForm"]["cPassword"];
    var phone = document.forms["RegForm"]["phone"];

    //Alert to check errors
    var AlertName=document.getElementById('name');
    var AlertEmail=document.getElementById('email');
    var AlertAddress=document.getElementById('address');
    var AlertPassword=document.getElementById('pwd');
    var AlertCPassword=document.getElementById('cpwd');
    var AlertPhone=document.getElementById('phone');
    /*
        * Checking for the conditions if fields are empty
    */
   if(name.value == ''){
        AlertName.innerText = "Atleast 8 to 15 characters required";
        return false;
   }else{
     AlertName.innerHTML="";
   }
   if(address.value == ''){
        AlertAddress.innerHTML="Kindly fill Address Field";
        return false;
   }else{
     AlertAddress.innerHTML="";
   }
   var regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   if(email.value ==''){
    AlertEmail.innerHTML="Kindly fill Email field";
    return false;
   }else if(email.value.match(RegEmail)){
     AlertEmail.innerHTML="";
   }else{
     AlertEmail.innerHTML="Please Enter a Valid Email";
     return false;
   }
   var regPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,15}$/;
   if(password.value ==''){
    AlertPassword.innerHTML="Kindly fill Password field";
    return false;
   }else if(password.value.match(regPassword)){
     AlertPassword.innerHTML="";
   }else{
     AlertPassword.innerHTML="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number.";
     return false;
   }

   if(confirmPassword.value ==''){
    AlertCPassword.innerHTML="Kindly fill this field";
    return false;
   }else if(confirmPassword.value != password.value ){
     AlertCPassword.innerHTML="Password does not match";
   }else{
     AlertCPassword.innerHTML="";
   }
   var regPhone=/^[6-9\d]{10}$/;
   if(phone.value ==''){
    AlertPhone.innerHTML='Kindly fill this field';
    return false;
   }else if (phone.value.match(regPhone)){
     AlertPhone.innerHTML="";
   }else{
     AlertPhone.innerHTML="Kindly enter a valid Phone Number";
     return false;
   }
   return true;

}