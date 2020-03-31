$(document).ready(function() {
    console.log("File is loaded.");
    var submitButton = $("#log-in");
    var emailInput = $("#user");
    var passwordInput = $("#login-password");

    submitButton.on("click", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return
        }
        loginUser(userData);
        emailInput.val("");
        passwordInput.val("");
    });
});

// function for the login
function loginUser(user) {
    $.post("/api/login", user).then(function(data) {
        window.location.replace(data);
    }).catch(function(err) {
        console.log(err);
    });
}
