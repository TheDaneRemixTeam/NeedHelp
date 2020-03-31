var loginHref = "window.location.href='/create'";

$(document).ready(function() {
    console.log($("#help-btn").attr("onclick"));
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      console.log(data);
      if (!data.firstname) {
          console.log("No one is logged in.")
      }
      else {
          console.log(data.firstname);
          $("#help-btn").attr("onclick", loginHref);
          $("#loginout").attr("href", "/logout").text("Logout");
          $("#account").attr("href", "/account");
      }
    });
  });