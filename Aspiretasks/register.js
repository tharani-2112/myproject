function Movetomainpage() {
    var ps1 = document.getElementById("ps1").value;
    var ps2 = document.getElementById("ps2").value;
    var firstName = document.getElementById("FirstName").value;
    var secondName = document.getElementById("SecondName").value;
    var emailValue = document.getElementById("Email").value;

    var emailFormate   = document.getElementById("Email").value.indexOf("@");
    var emailDot = document.getElementById("Email").value.indexOf(".");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");

    if (firstName != "" &&secondName != "" &&emailValue != "" &&ps1 != "") 
    {      
      return call();
    }
     else if (ps1!=ps2) {
        p4.innerHTML = "Enter confirm password same as your password";
    }
     else if (firstName != "" && secondName != "") {
        p4.innerHTML = "Re-Enter Your Password";
        p5.innerHTML = "Enter Your Password";
        p3.innerHTML = "Enter Your Email Address";
    } else if (secondName != "" && emailValue != "") {
        if (emailValue == -1) {
            p3.innerHTML = "Enter Your Email Address in correct Format";
        } else if (emailDot == 0) {
            p3.innerHTML = "Enter Your Email Address in correct Format";
        }
        p1.innerHTML = "Enter Your First Name";
        p4.innerHTML = "Re-Enter Your Password";
        p5.innerHTML = "Enter Your Password";
    } else if (firstName != "" && emailValue != "") {
        p2.innerHTML = "Enter Your Last Name";
        p4.innerHTML = "Re-Enter Your Password";
        p5.innerHTML = "Enter Your Password";
    } else if (ps1 != "" && ps2 != "") {
        p1.innerHTML = "Enter Your First Name";
        p2.innerHTML = "Enter Your Last Name";
        p3.innerHTML = "Enter Your Email Address";
    } else if (firstName != "") {
        for (var i = 0; i < firstName.length; i++) {
            if (
                (firstName.charCodeAt(i) > 64 &&
                    firstName.charCodeAt(i) < 91) ||
                (firstName.charCodeAt(i) > 96 && firstName.charCodeAt(i) < 123)
            ) {
                p1.innerHTML = "";
            } else {
                p1.innerHTML = "Name Should only contain character";
                console.log("Number Occured");
                break;
            }
        }
        p2.innerHTML = "Enter Your Last Name";
        p4.innerHTML = "Re-Enter Your Password";
        p5.innerHTML = "Enter Your Password";
        p3.innerHTML = "Enter Your Email Address";
    } else if (secondName != "") {
        for (var i = 0; i < secondName.length; i++) {
            console.log(secondName);
            if (
                (secondName.charCodeAt(i) > 64 &&
                    secondName.charCodeAt(i) < 91) ||
                (secondName.charCodeAt(i) > 96 &&
                    secondName.charCodeAt(i) < 123)
            ) {
                p2.innerHTML = "";
            } else {
                p2.innerHTML = "Name Should only contain character2";
                console.log("Number Occured");
                break;
            }
        }
        p1.innerHTML = "Enter Your First Name";
        p5.innerHTML = "Enter Your Password";
        p4.innerHTML = "Re-Enter Your Password";
        p3.innerHTML = "Enter Your Email Address";
    } else if (emailValue != "") {
        p1.innerHTML = "Enter Your First Name";
        p2.innerHTML = "Enter Your Last Name";
        p4.innerHTML = "Re-Enter Your Password";
        p5.innerHTML = "Enter Your Password";
    } else if (
        ps1 == "" ||
        ps2 == "" ||
        firstName == "" ||
        secondName == "" ||
        emailValue == ""
    ) {
        p1.innerHTML = "Enter Your First Name";
        p2.innerHTML = "Enter Your Last Name";
        p4.innerHTML = "Re-Enter Your Password";
        p3.innerHTML = "Enter Your Email Address";
        p5.innerHTML = "Enter Your Password";
    }

function call() {
    location.href = "My code.html";
}
}

function Firstname() {
    var firstName = document.getElementById("FirstName").value;
    var p1 = document.getElementById("p1");
    console.log(firstName);
    if (firstName == "") {
        // alert("Please enter First Name");
        p1.innerHTML = "Enter Your First Name";
    } else if (firstName != "") {
        for (var i = 0; i < firstName.length; i++) {
            if (
                (firstName.charCodeAt(i) > 64 &&
                    firstName.charCodeAt(i) < 91) ||
                (firstName.charCodeAt(i) > 96 && firstName.charCodeAt(i) < 123)
            ) {
                p1.innerHTML = "";
            } else {
                p1.innerHTML = "Name Should only contain character1";
                console.log("Number Occured");
                break;
            }
        }
    }
}

function Secondname() {
    var inp2 = document.getElementById("SecondName").value;
    var p2 = document.getElementById("p2");
    if (inp2 == "") {
        p2.innerHTML = "Enter Your Last Name";
    } else if (inp2 != "") {
        for (var i = 0; i < inp2.length; i++) {
            if (
                (inp2.charCodeAt(i) > 64 && inp2.charCodeAt(i) < 91) ||
                (inp2.charCodeAt(i) > 96 && inp2.charCodeAt(i) < 123)
            ) {
                p2.innerHTML = "";
            } else {
                p2.innerHTML = "Name Should only contain character";
                console.log("Number Occured");
                break;
            }
        }
    }
}

function call1() {
    var ps2 = document.getElementById("ps2").value;
    var ps1 = document.getElementById("ps1").value;
    var p4 = document.getElementById("p4");
    if (ps2 == "") {
        p4.innerHTML = "Re-Enter Your Password";
    } else if (ps2 != ps1) {
        p4.innerHTML = "Enter confirm password same as your password";
    } else if (ps2 == ps1) {
        p4.innerHTML = "";
    }
}

function email() {
    var email = document.getElementById("Email").value;
    var emailF = document.getElementById("Email").value.indexOf("@");
    var emailDot = document.getElementById("Email").value.indexOf(".");
    var p3 = document.getElementById("p3");
    if (email == "") {
        p3.innerHTML = "Enter Your Email Address";
    } else if (emailF == -1) {
        p3.innerHTML = "Enter Email Address in correct format";
    } else if (emailDot == 0) {
        p3.innerHTML = "Enter Email Address in correct format";
    } else if (email != "") {
        p3.innerHTML = "";
    }
}

function confirmPassword() {
    var confirmPassword = document.getElementById("ps1").value;
    var errMessage = document.getElementById("p5");
    if (confirmPassword == "") {
        p5.innerHTML = "Enter Confirm Password";
    } else if (confirmPassword.length < 5) {
        p5.innerHTML = "Enter Atleast 5 character";
    } else {
        p5.innerHTML = "";
    }
}