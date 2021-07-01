function validate(){
    var firstName=document.forms["myform"]["first_name"];
    var lastName=document.forms["myform"]["last_name"];
    var company=document.forms["myform"]["company"];
    var email=document.forms["myform"]["email"];
    var areaCode=document.forms["myform"]["area_code"];
    var phoneNumber=document.forms["myform"]["phone_number"];
    var subject=document.forms["myform"]["subject"];
    var radio=document.forms["myform"]["radio"];
    var yes=document.getElementById("yes").checked;
    var no=document.getElementById("no").checked;
    if(firstName.value==""){
        alert("enter the firstname");
        //return false;
    }
    if(!isNaN(firstName.value)){
     alert("the firstname should be character");
     //return false;
    }
    if(lastName.value==""){
        alert("enter the last name");
        return false;
    }
    if(!isNaN(firstName.value)){
        alert("the lastname should be character");
        //return false;
    }
    if(company.value==""){
        alert("enter the company");
        //return false;
    }
    if(!isNaN(company.value)){
     alert("the companyname should be character");
     //return false;
    }
    if(email.value=="")
    {
        alert("enter your email");
        return false;
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
       {
         return true;
         }
    else  {
        alert("You have entered an invalid email address!");
        return false;
        }
    if(areaCode.value=="")
    {
       alert("enter your area code");
       return false;
    }
    if(isNaN(areaCode.value))
    {
        alert("area code should be digit");
        return false;
    }
    if(phoneNumber.value=="")
    {
       alert("enter your phone number");
       return false;
    }
    if(isNaN(phoneNumber.value))
    {
        alert("phone number should be digit");
        return false;
    }
    if(phoneNumber.length!=10)
    {
        alert("must be 10 digit number");
        return false;
    }
    if(subject=="choose option")
    {
        alert("choose a subject");
        return false;
    }
    if((yes==false)||(no==false)){
       alert("select yes or no");
       return false;
    }
}