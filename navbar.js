
function myFunction() {
  var x = document.getElementById("navlist");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// $(document).ready(function() {
//     $("#toggleButton").click(function() {
//         // $("#navlist").toggle();
//         $("#navlist").css("display", "block");
//     });
// });