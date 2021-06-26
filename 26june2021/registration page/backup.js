if (password != cpassword) {
    p5.innerHTML = "Enter confirm password same as your password";
} if (fullName != "") {
    for (var i = 0; i < fullName.length; i++) {
        if (
            (fullName.charCodeAt(i) > 64 &&
                fullName.charCodeAt(i) < 91) ||
            (fullName.charCodeAt(i) > 96 && fullName.charCodeAt(i) < 123)
        ) {
            p1.innerHTML = "";
        } else {
            p1.innerHTML = "Name Should only contain character";
            console.log("Number Occured");
            break;
        }
    }
    p5.innerHTML = "Re-Enter Your Password";
    p4.innerHTML = "Enter Your Password";
    p2.innerHTML = "Enter Your Email Address";
    p3.innerHTML = "Select your Gender";
} if (userName != "") {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userName))
    {
     p2.innerHTML = "";
     return (true);
     }
    else {
        //alert("You have entered an invalid email address!");
        p2.innerHTML = "Enter Email Address in correct format";
        return (false);
    }
}if (fullName != "" && userName != "") {
    p3.innerHTML = "Select your gender";
    p5.innerHTML = "Re-Enter Your Password";
    p4.innerHTML = "Enter Your Password";
} else if (
    password == "" ||
    cpassword == "" ||
    fullName == "" ||
    userName == "" ||
    Gender == ""||
    message==""||
    file=="")
 {
    p1.innerHTML = "Enter Your FullName";
    p5.innerHTML = "Re-Enter Your Password";
    p2.innerHTML = "Enter Your Email Address";
    p4.innerHTML = "Enter Your Password";
    p3.innerHTML = "Select your Gender";
    lang.innerHTML = "Specify anyone language";
    addressError.innerHTML="Enter your address";
    fileError.innerHTML="Select your file";
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
}

function FullName() {
var fullName = document.getElementById("FullName").value;
var p1 = document.getElementById("p1");
console.log(fullName);
if (fullName == "") {
    // alert("Please enter First Name");
    p1.innerHTML = "Enter Your Name";
} else if (fullName != "") {
    for (var i = 0; i < fullName.length; i++) {
        if (
            (fullName.charCodeAt(i) > 64 && fullName.charCodeAt(i) < 91) ||
            (fullName.charCodeAt(i) > 96 && fullName.charCodeAt(i) < 123)
        ) {
            p1.innerHTML = "";
        } else {
            p1.innerHTML = "Name Should only contain alphabets";
            break;
        }
    }
}
}
function UserName() 
{
var userName=document.getElementById("UserName").value;
if (userName == "") {
    p2.innerHTML = "Enter Your Email Address";
}
else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userName))
{
 p2.innerHTML = "";
 return (true);
 }
else {
    p2.innerHTML = "Enter Email Address in correct format";
    return (false);
}
}
function confirmPassword() {
var password= document.getElementById("ps2").value;
var cpassword = document.getElementById("ps1").value;
var p5 = document.getElementById("p5");
if (cpassword== "") {
    p5.innerHTML = "Re-Enter Your Password";
} else if (cpassword != password) {
    p5.innerHTML = "Enter confirm password same as your password";
} else if (cpassword== password) {
    p5.innerHTML = "";
}
}
function Password() {
var password = document.getElementById("ps1").value;
if (password == "") {
    p4.innerHTML = "Enter your Password";
} else if (password.length < 5) {
    p4.innerHTML = "Enter Atleast 5 character";
} else {
    p4.innerHTML = "";
}
}
function genderValidation() {
var Gender = document.getElementById("Gender").checked;
var p3 = document.getElementById("p3");
if (Gender == false) {
    p3.innerHTML = "Specify Gender!!!";
}
else{
    p3.innerHTML="";
}
}

function AddressValidation() {
let message = document.getElementById("message").value;
console.log(message);
console.log("message");
var addressError = document.getElementById("addressError");
if (message == "") {
    addressError.innerHTML = "Please enter address";
} else {
    addressError.innerHTML = "";
}
}

function languageValidation() {
var languages = document.getElementById("languages").checked;
let lang1 = document.getElementById("lang");
console.log("koook");
if (languages == true) {
    lang1.innerHTML = "Specify any one language";
}
}
function filevalidation()
{
    var valid = true;
    var file_name = "";
    var file_type = "";
    var file_size = "";
    var error_msg = "";
    var valid_size = 2*1000*1000;
    var display_error = document.getElementById('fileError');
    var file = document.getElementById("file");
 
    if(file.files.length != 0)
    {
        file_name = file.files[0].name;
        file_size = file.files[0].size;
        file_type = file.files[0].type;
         
        if(file_type!=".pdf")
        {
            valid = false;
            error_msg = error_msg + "\n* Only .pdf file type supported.";
        }
        if(file_size > valid_size)
        {
            valid = false;
            error_msg = error_msg + "\n* Filesize should be upto 2MB.";
        }
    }
    else
    {
        valid = false;
        error_msg = error_msg + "\n* Please select any pdf file.";
    }
    if(valid==true)
    {
        display_error.innerHTML="";
        return true;
    }
    else
    {
        display_error.innerHTML= error_msg;
        return false;
    }
}
