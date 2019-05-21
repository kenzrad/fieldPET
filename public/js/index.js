$(document).ready(function(){
  $('.modal').modal();
  $('.tabs').tabs();
  $("#bugTabs").tabs({
    swipeable: true
  });
});

$("#submitBugs").on("click", function(e) {
  $("#loginModal").modal('open');
});

$("#loginForm").on("submit", function(e) {
  e.preventDefault();

  var test = $("#loginForm").serializeArray();

  console.log(test);
});