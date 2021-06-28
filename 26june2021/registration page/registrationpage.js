function Register() {
    var password = document.getElementById("ps1").value;
    var cpassword= document.getElementById("ps2").value;
    var fullName = document.getElementById("FullName").value;
    var userName = document.getElementById("UserName").value;
    var male = document.getElementById("m_Gender").checked;
    var female = document.getElementById("f_Gender").checked;
    var country = document.getElementById("country");
    var message = document.getElementById("message").value;
    if (
        fullName != "" &&
        userName != "" &&
        password != "" &&
        cpassword != "" &&
        Gender != ""&&
        message != ""&&
        language !=""&&
        file!=""
    ) {
        return call();
    }  

    if(fullName=="")
    {
        p1.innerHTML="Enter your name";
    }
    else{
        for (var i = 0; i < fullName.length; i++) {
            if (
                (fullName.charCodeAt(i) > 64 &&
                    fullName.charCodeAt(i) < 91) ||
                (fullName.charCodeAt(i) > 96 && fullName.charCodeAt(i) < 123)) {
                p1.innerHTML = "";
            } else {
                p1.innerHTML = "Name Should only contain character";
                console.log("Number Occured");
                break;
            }
        }
    }

    if(userName=="")
    {
        p2.innerHTML="Enter your email";
    }
    else{
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
    }

    if(password=="")
    {
        p4.innerHTML="Enter your password";
    }
    else{
         if (password.length < 5) {
            p4.innerHTML = "Enter Atleast 5 character";
        } else {
            p4.innerHTML = "";
            return(false);
        }
    }
     console.log(password);
     console.log(cpassword);
    if(cpassword=="")
    {   
        console.log("a");
        p5.innerHTML="Retype your password";
    } else {
    if(cpassword==password)
        {
            console.log("b");
            p5.innerHTML="";
        } else{
            console.log("c");
            p5.innerHTML="Enter confirm password as same as your password";
            return(false);
        }
    }

    if ((male== true)||(female==true)) {
            p3.innerHTML = "";
        }
        else{
            p3.innerHTML = "Specify Gender";
        }

    var selectedValue = country.options[country.selectedIndex].value;
    if (selectedValue == "select"){
        //alert("Please select a card type");
         p6.innerHTML="Select a country";
        }
        else{
            p6.innerHTML="";
        }
     
     var c_lang=document.getElementById("c").checked;
     var java_lang=document.getElementById("java").checked;
     var html_lang=document.getElementById("html").checked;   
     var css_lang=document.getElementById("css").checked;
     var python_lang=document.getElementById("python").checked;
     {
         if((c_lang==true)||(java_lang==true)||(html_lang==true)||(css_lang==true)||(python_lang==true))
         {
             p7.innerHTML="";
         } else{
             p7.innerHTML="Choose anyone language";
         }
     }


    if (message == "") {
            p8.innerHTML = "Please enter address";
        } else {
            p8.innerHTML = "";
        }

    var valid = true;
    var file_name = "";
    var file_type = "";
    var file_size = "";
    var error_msg = "";
    var valid_size = 2*1000*1000;
    var display_error = document.getElementById('p9');
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
var checked = 0;
var language = document.getElementById("languages");
var lang = tblFruits.getElementsByTagName("INPUT");
for (var i = 0; i < lang.length; i++) {
        if (lang[i].checked) {
            checked++;
        }
    }
    if (checked > 0) {
        p7.innerHTML=""
        return true;
    } else {
        p7.innerHTML="select anyone language";
        return false;
    }
}
     
    function call() {
        alert(`
        Name :${fullName}
        Gender:${Gender}
        email:${email}
        country:${country.value}
        languagesknown:${languages}
        Address:${message}
        `);
    }