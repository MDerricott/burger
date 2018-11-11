console.log("javascriptconnected");

$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured

    };// Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("added new burger");
        location.reload(true);
      }
    );



    // $(".trying").on("click", function (event) {
    //   event.preventDefault();
    //   console.log("missing?")
    // });
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
    //   console.log("submitted");
    //   var newBurger = {
    //     name: $("#burgerName").val().trim(),
    //   };

    //   // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function () {
         
    //       console.log("created new burger");
    //       // Reload the page to get the updated list
    //       location.reload();

    //     });
  //   });
  });
});