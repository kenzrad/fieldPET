//////BUG DATA TEST -- To use this, module.exports the function in metrics.js and uncomment out the crap at the bottom of dis page//////
// var metrics = require('./metrics.js');

$(document).ready(function(){
  $('.modal').modal();
  $('.tabs').tabs();
  $("#bugTabs").tabs({
    swipeable: true
  });
});

$("#submitBugs").on("click", function(e) {
  e.preventDefault();
  $("#loginModal").modal('open');
});


$("#loginForm").on("submit", function(e) {
  e.preventDefault();

  var test = $("#loginForm").serializeArray();

  console.log(test);

  //run the metrics stuff
  // metrics.calculateMetrics(test);

  //if login passes, we will serialize the bug data and run the metrics function (passing the bug object as an argument)
});

$(".dec").on("click", function(e) {
  e.preventDefault();
  var val = $(this).next().val();
  if (val - 1 >= 0) {
    val--;
  }
  
  $(this).next().val(val);
});

$(".inc").on("click", function(e) {
  e.preventDefault();
  var val = $(this).prev().val();
  val++;

  $(this).prev().val(val);
});

////////BUG DATA TEST//////////
//testData
// var bugData = {
//   site: "09-PL01-Col-DR20",
//   date: "3/2/15",
//   beetles: 1,
//   blackflies: 0,
//   clams: 0,
//   common_netspinners: 74,
//   Crayfish: 0,
//   dragonflies_damselflies: 0,
//   flatworms: 0,
//   fw_shrimp: 0,
//   gilled_snails: 0,
//   gomphidae: 0,
//   hellgrammites: 0,
//   leeches: 0,
//   lunged_snails: 2,
//   mayflies: 0,
//   midges: 83,
//   most_caddisflies: 14,
//   most_frue_flies: 4,
//   other: 0,
//   scuds: 0,
//   sowbugs: 1,
//   stoneflies: 0,
//   true_bugs: 0,
//   worms: 63
// };

//testData function
// metrics(bugData);
// console.log(bugData);