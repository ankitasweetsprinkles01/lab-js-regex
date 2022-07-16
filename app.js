/* Fill your code*/
function formValidate() {
    // * Value of the input field.
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var address = document.forms["RegForm"]["Address"];
    var password = document.forms["RegForm"]["Password"];
    var confirmPassword = document.forms["RegForm"]["cPassword"];
    var phone = document.forms["RegForm"]["phone"];

    // * Alert for errors
    var AlertName = document.getElementById("name");
    var AlertEmail = document.getElementById("email");
    var AlertAddress = document.getElementById("address");
    var AlertPassword = document.getElementById("pwd");
    var AlertCPassword = document.getElementById("cpwd");
    var AlertPhone = document.getElementById("phone");

    /*
     * Regular expression for email validation
     */

    /*
     * Checking condition if fields are empty
     */
    if (name.value == "") {
        AlertName.innerHTML = "At least 8 to 15 characters required";
        return false;
    } else {
        AlertName.innerHTML = "";
    }

    if (address.value == "") {
        AlertAddress.innerHTML = "Kindly fill Address field";
        return false;
    } else {
        AlertAddress.innerHTML = "";
    }

    /*
     * Email validation
     */
    var regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (email.value == "") {
        AlertEmail.innerHTML = "Kindly fill Email field";
        return false;
    } else if (email.value.match(regEmail)) {
        AlertEmail.innerHTML = "";
    } else {
        AlertEmail.innerHTML = "Please Enter a Valid Email";
        return false;
    }

    /*
     * Password validation
     */
    var regPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (password.value == "") {
        AlertPassword.innerHTML = "Kindly fill Password field";
        return false;
    } else if (password.value.match(regPassword)) {
        AlertPassword.innerHTML = "";
    } else {
        AlertPassword.innerHTML =
            "password must contain 1 uppercase letter, 1 lowercase letter, at least 1 number.";
        return false;
    }

    /*
     * ConfirmPassword Validation
     */
    if (confirmPassword.value == "") {
        AlertCPassword.innerHTML = "Kindly fill this field";
        return false;
    } else if (confirmPassword.value != password.value) {
        AlertCPassword.innerHTML = "Password does not match";
        return false;
    } else {
        AlertCPassword.innerHTML = "";
    }

    /*
     * Phone Number Validation
     */
    var regPhone = /^[6-9\d]{10}$/;
    if (phone.value == "") {
        AlertPhone.innerHTML = "Kindly fill this field";
        return false;
    } else if (phone.value.match(regPhone)) {
        AlertPhone.innerHTML = "";
    } else {
        AlertPhone.innerHTML = "Please Enter a Valid Phone Number";
        return false;
    }

    success.innerHTML = "Form Submitted Successfully";
    return false;
}
