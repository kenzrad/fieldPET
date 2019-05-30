var ctx = $('#chart-display');


//For now, we have temporary buttons to run various functions. Later we should allow more flexibility with drop-down menus and other options so the user can decide what to do (but this will be a quick way to get this going)
$("#test-chart-btn").on("click", function() {
    testChart();
    console.log("testing this chart shit")
});

$("#get-all-btn").on("click", function() {
    getAllData();
    console.log("Getting all your data shit")
});

$("#all-SF-btn").on("click", function() {
    getSfData();
    console.log("Getting Stonefly Data")
});

$("#lj-condition-btn").on("click", function() {
    getLjCondition();
    console.log("Getting Stonefly Data")
});

$("#lj-MF-btn").on("click", function() {
    getLjMf();
    console.log("Getting Stonefly Data")
});


function testChart() {
    var chartDisplay = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });

    $("#chart-title").text("Test Chart");
    showChart();
};


function getAllData() {
    console.log("this will be a table or a json API root");
};

function getSfData() {
    console.log("This function will show us all the stonefly data, either organized by site or over time with sites color coded, who knows");
};

function getLjCondition() {
    console.log("This function will show us the condition score of the james river over time -- this is a particularily complicated function, so we may change it quite a bit");
};

function getLjMf() {
    console.log("This function will show us the number of mayflies in the james river over time");
};

function showChart() {
    $("#chartModal").modal('open');
}
