$(document).ready(function () {

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
})