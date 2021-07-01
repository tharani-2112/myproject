function validate(){
    var firstName=document.forms["myform"]["firstname"];
    var lastName=document.forms["myform"]["lastname"];
    var company=document.forms["myform"]["company"];
    var email=document.forms["myform"]["email"];
    var areaCode=document.forms["myform"]["area_code"];
    var phoneNumber=document.forms["myform"]["phone_number"];
    var subject=document.forms["myform"]["subject"];
    var radio=document.forms["myform"]["radio"];

    if(firstName==""){
        alert("enter the firstname");
        //return false;
    }
    if(!isNaN(firstName)){
     alert("the firstname should be character");
     //return false;
    }
    if(lastName==""){
        alert("enter the last name");
        return false;
    }
    if(!isNaN(firstName)){
        alert("the lastname should be character");
        //return false;
    }
    if(company==""){
        alert("enter the company");
        //return false;
    }
    if(!isNaN(company)){
     alert("the companyname should be character");
     //return false;
    }
    if(email=="")
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
    if(areaCode=="")
    {
       alert("enter your area code");
    }
}