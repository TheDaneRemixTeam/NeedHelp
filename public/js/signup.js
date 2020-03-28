console.log("The file is linked!");

$("#help-btn").on("click", function(event) {
    event.preventDefault();
    console.log("This button works!");
    var newUser = {
        firstname: $("#firstName").val().trim(),
        lastname: $("#lastName").val().trim(),
        email: $("#email").val().trim(),
        address: $("#address").val().trim(),
        city: $("#inputCity").val().trim(),
        state: $("#inputState").val().trim(),
        zip: $("#inputZip").val().trim(),
        password: $("#password").val().trim(),
        phone: $("#phone").val().trim()
    }
    $.post("/api/signup", newUser).then(function(data) {
        console.log(data);
        window.location.replace(data);
    });
});

// function checkForEmpty(element_id) {
//     let check = $(element_id).val().trim()
//     if (!check)
//         return check = "null"
//     else
//         return check
// }