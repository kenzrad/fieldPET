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
    siteID: $("input[name=site]").val()
  }

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

  //We will need to replace the site, date, and SiteID values; also we can probalby do a loop for this to simplify (but tis fine for now)
  var newBug = {
    date: date,
    B: bugData[0].value,
    BF: bugData[1].value,
    C: bugData[2].value,
    CL: bugData[3].value,
    CN: bugData[4].value,
    DD: bugData[5].value,
    F: bugData[6].value,
    GS: bugData[7].value,
    HFA: bugData[8].value,
    L: bugData[9].value,
    LS: bugData[10].value,
    M: bugData[11].value,
    MC: bugData[12].value,
    MTF: bugData[13].value,
    OO: bugData[14].value,
    SC: bugData[15].value,
    SB: bugData[16].value,
    SF: bugData[17].value,
    W: bugData[18].value,
    SiteId: id
  };
  console.log("Bug data collected");
  submitBug(newBug);

  function submitBug(newBug) {
    $.post("/api/Bugs", newBug)
      .then(function (res) {
        console.log(`Submit bugs: ${res}`)
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
