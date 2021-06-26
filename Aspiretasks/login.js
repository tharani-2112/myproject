function movetomainpage()
{
    var emailValue = document.getElementById("Email").value;
    var emailFormate   = document.getElementById("Email").value.indexOf("@");
    var emailDot = document.getElementById("Email").value.indexOf(".");
    var password=document.getElementById("password").value;
    if(emailvalue!=""&&password!="")
    {   
        console.log("enter");
        return call();
    }
    else if(emailvalue=="")
    {
        p1.innerHTML="Enter your user id";
    }
    else(password=="")
    {
        p2.innerHTML="Enter your password";
    }
    function call() {
        location.href = "My code.html";
    }
}