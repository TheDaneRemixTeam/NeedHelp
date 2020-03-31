var loggedOutLink = "window.location.href='/login'";
var loggedInLink = "window.location.href='/account'";

$(document).ready(function () {
  $.get("/api/user_data").then(function (data) {
    if (!data.firstname) {
      console.log("No one is logged in.");
      $("#approve").attr("onclick", loggedOutLink);
    } else {
      console.log(`${data.firstname} is logged in.`);
      $("#approve").attr("onclick", loggedInLink);
      $("#loginout").attr("href", "/logout").text("Logout");
      $("#account").attr("href", "/account");
      $("#approve").on("click", function (event) {
        event.preventDefault();
        console.log("This button works!");
        let gigId = $(this).attr("data-id");
        $.ajax({
          url: "/api/gigview/" + gigId,
          method: "PUT"
        }).then(function (data) {
          console.log(data);

          // window.location.href = "/account";
        });
      });
    }
  });
});

