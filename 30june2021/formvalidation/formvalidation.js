function register()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var companyName = document.getElementById("companyName");
    var areaCode = document.getElementById("areaCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var subject = document.getElementById("subject").value;
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");

    if(firstName=="")
    {
     p1.innerHTML="Enter your Firstname";
    }
    else{
        for (var i = 0; i < firstName.length; i++) {
            if (
                (firstName.charCodeAt(i) > 64 &&
                    firstName.charCodeAt(i) < 91) ||
                (firstName.charCodeAt(i) > 96 && fisrtName.charCodeAt(i) < 123)) {
                p1.innerHTML="";
            } else {
                p1.innerHTML="Name Should only contain character";
                console.log("Number Occured");
                break;
            }
        }
    }
    if(lastname=="")
    {
     p2.innerHTML="Enter your Lasttname";
    }
    else{
        for (var i = 0; i < lastName.length; i++) {
            if (
                (lastName.charCodeAt(i) > 64 &&
                    lastName.charCodeAt(i) < 91) ||
                (lastName.charCodeAt(i) > 96 && lastName.charCodeAt(i) < 123)) {
                    p2.innerHTML="";

            } else {
                p2.innerHTML="Name Should only contain character";
                console.log("Number Occured");
                break;
            }
        }
        }
    if(email=="")
    {
     p3.innerHTML="Enter your email id";
    }
    else{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userName))
        {
         p3.innerHTML = "";
         return (true);
         }
        else {
            //alert("You have entered an invalid email address!");
            p3.innerHTML = "Enter Email Address in correct format";
            return (false);
        }
    }

    

}