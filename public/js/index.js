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

  var test = $("#bugForm").serializeArray();

  console.log(test);
  console.log(test);
  
  //We will need to replace the site, date, and SiteID values; also we can probalby do a loop for this to simplify (but tis fine for now)
  var newBug = {
    site: "09-PL01-Col-DR20",
    date: "3/2/15",
    B: test[0].value,
    BF: test[1].value,
    C: test[2].value,
    CL: test[3].value,
    CN: test[4].value,
    DD: test[5].value,
    F: test[6].value,
    GS: test[7].value,
    HFA: test[8].value,
    L: test[9].value,
    LS: test[10].value,
    M: test[11].value,
    MC: test[12].value,
    MTF: test[13].value,
    OO: test[14].value,
    SC: test[15].value,
    SB: test[16].value,
    SF: test[17].value,
    W: test[18].value,
    SiteId: 7
  };
  console.log(newBug);

  submitBug(newBug);

  function submitBug(newBug) {
    $.post("/api/Bugs", newBug);
  }

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
