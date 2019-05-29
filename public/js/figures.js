var ctx = $('#chart-display');

$("#test-chart-btn").on("click", function() {
    testChart();
    console.log("testing this chart shit")
})

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

function generateOneMetricChart() {
    var oneMetricChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function showChart() {
    $("#chartModal").modal('open');
}
