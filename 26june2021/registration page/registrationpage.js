function Register() {
    var password = document.getElementById("ps1").value;
    var cpassword= document.getElementById("ps2").value;
    var fullName = document.getElementById("FullName").value;
    var userName = document.getElementById("UserName").value;
    var email = document.getElementById("UserName").value;
    var Gender = document.getElementById("Gender").value;
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    var lang = document.getElementById("lang").value;
    var addressError = document.getElementById("addressError").value;
    var fileError=document.getElementById("fileError").value;
    if (
        fullName != "" &&
        userName != "" &&
        password != "" &&
        cpassword != "" &&
        Gender != ""&&
        file!=""
    ) {
        return call();
    }  
    if(fullName=="")
    {
        p1.innerHTML="Enter your name";
    }
    if(userName=="")
    {
        p2.innerHTML="Enter your email";
    }

}
    function call() {
        alert(`
        Name :${fullName}
        Gender:${Gender}
        email:${email}
        country:${country}
        languagesknown:${languages}
        Address:${message}
        `);
    }