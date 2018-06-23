// Once the DOM is fully loaded.
$(function() {

  $(".flright").on("click", function(event) {
    var id = $(this).data("id");

    var newDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#input").val().trim(),
      devoured: 0
    };

    console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // delete on click 
  $(".endwrap").on("click", '.remove', function(event) {
   
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
