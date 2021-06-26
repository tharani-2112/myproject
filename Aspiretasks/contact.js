function send()
{
    var name=document.getElementById("name").Value;
    var email=document.getElementById("email").value;
if(name!=""&&email!="")
{
    location.href="My code.html";
}
else if(email=="")
{
    alert("Enter the email");
}
else(name=="")
{
    alert("Enter the name");
}
}