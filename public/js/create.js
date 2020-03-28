$("#help-btn").on("click", function(event) {
    event.preventDefault();
    console.log("This button works!");
    var newGig = {
        category: $("#category").val().trim(),
        title: $("#gig-title").val().trim(),
        description: $("#description").val().trim(),
        gigtime: $("#time").val().trim(),
        budget: $("#inputBudget").val().trim(),

    }
    $.post("/api/create", newGig).then(function(data) {

        console.log(data);

        window.location.href = "/";

    });
});