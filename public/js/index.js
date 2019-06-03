//
//
//  BUTTONS AND CLICKS
//
//
$(document).ready(function () {
  $('.modal').modal();
  $('.tabs').tabs();
  $("#bugTabs").tabs({
    swipeable: true
  });
});

$("#submitBugs").on("click", function (e) {
  e.preventDefault();
  populateSiteInfo();
  $("#loginModal").modal('open');
});

$("#loginForm").on("submit", function (e) {
  e.preventDefault();

  var login = {
    username: $("input[name=username]").val().trim(),
    password: $("input[name=password]").val().trim(),
    fieldDate: $("input[name=fieldDate]").val(),
    siteID: $("#site-options").val()
  };

  $.post('/api/login', login, function (res) {
    if (res) {
      $("#loginModal").modal('close');
      console.log("Hail Satan")
      collectData(login.fieldDate, login.siteID);
    }
    else {
      $("#message-text").text("Do you even work here?");
    }
  });
});

$(".dec").on("click", function (e) {
  e.preventDefault();
  var val = $(this).next().val();
  if (val - 1 >= 0) {
    val--;
  }

  $(this).next().val(val);
});

$(".inc").on("click", function (e) {
  e.preventDefault();
  var val = $(this).prev().val();
  val++;

  $(this).prev().val(val);
});

$(".image").on("click", function () {
  if ($("#bugInfo").hasClass("hidden")) {
    var left = $(this).offset().left + parseInt($(this).css("width")) + 5;
    var top = $(this).offset().top - 30;
    $("#bugInfo").css({ "left": left, "top": top });
    $("#bugInfo").toggleClass("hidden");
  } else {
    $("#bugInfo").toggleClass("hidden");
  }

  var infoKey = $(this).data("name");
  populateBugInfo(info[infoKey]);
});

$(document).on("click", function (e) {
  var hasBugInfoAsParent = false;
  if (e.target.id === "bugInfo") {
    hasBugInfoAsParent = true;
  } else {
    for (val of $(e.target).parents()) {
      if (val.id === "bugInfo") {
        hasBugInfoAsParent = true;
      }
    }
  }

  if (hasBugInfoAsParent === false) {
    if (!e.target.getAttribute("data-name")) {
      if (!$("#bugInfo").hasClass("hidden")) {
        $("#bugInfo").toggleClass("hidden");
      }
    }
  }
});

$(window).resize(function () {
  if (!$("#bugInfo").hasClass("hidden")) {
    $("#bugInfo").toggleClass("hidden");
  }
});

//
//
//  FUNCTIONS
//
//
function collectData(date, id) {
  var bugData = $("#bugForm").serializeArray();
  var newBugs = { date: date, SiteId: id};
  
  for (pair of bugData) {
    if (pair.value !== "") {
      newBugs[pair.name] = pair.value;
      console.log("collecting data for new bugs");
    }
  }

  submitBug(newBugs);

  function submitBug(newBug) {
    $.post("/api/Bugs", newBug)
      .then(function (res) {
        console.log(`Submiting bug data`)
        $("#bugForm").trigger("reset");
      })
  }

  //calculate condition index score (metrics.js)
  calculateMetrics(bugData);
}

function populateBugInfo(bugData) {
  $("#bugInfo").empty();
  var list = $("<ul>");

  $("#bugInfo").append('<h5 class="bugInfoTitle">Significant Details</h5>');

  for (item of bugData) {
    list.append(item);
  }

  $("#bugInfo").append(list);
}

function populateSiteInfo() {
  $.get('/api/Site', function (res) {

    for (item of res) {
      var optionItem = $("<option>");
      optionItem.data("data-name", item.site);
      optionItem.text(item.site);
      optionItem.attr("value", item.id);

      $("#site-options").append(optionItem);

    }

  });
}