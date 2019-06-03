var ctx = $('#chart-display');

$("#bug-counts-btn").on("click", function() {
    $.get("/api/bugs/SF")
    .then(function(allBugData){
        lineChart(allBugData);
    })
    console.log("Getting Stonefly Data")
});

$("#join-table-btn").on("click", function() {
    $.get(`/api/site/Fairfax County/M`)
    .then(function(data){
        getSiteBugData(data)
    })
});


function getSiteBugData(data) {
    console.log("Getting bug info for that location...")
    var item = data.map(function(item){
        return item;
    });
    //later, we are going to want to put this into a dataset array so we can style the different variables, for now I'm leaving like this :)
    var data = [];
    var labels = [];
    for ( group of item) {
        for (i = 0; i < group.Bugs.length; i++) {
            var dataSet = { 
                x: group.Bugs[i].SiteId, 
                //this is set this way so that we can later use any bug query (and not just "M")
                y: Object.values(group.Bugs[i])[0]
            };
            labels.push(group.Bugs[i].SiteID);
            data.push(dataSet);
        }
    }
    scatterPlotChart(data, labels);
};

function lineChart(data) {
    var item = data.map(function(item){
        return item;
    });
    
    item.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
    });
    
         new Chart(ctx, {
            type: 'line', 
            data: {
                labels: item.map(function(item){
                    return item.date;
                }),
            datasets: [{
                label: 'Bug Count',
                backgroundColor:'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: item.map(function(item){
                    return item.SF;
                })
        
            }]
        },
        options: {}
    });

    $('#chart-title').text('Bug Counts Over Time');
    showChart();
   
};


function scatterPlotChart(data, labels) {
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Count', 
                data: data, 
                borderColor: '#2196f3',           
                backgroundColor: '#2196f3',
            }]
        }
    });
   $('#chart-title').text('Bug Counts By Site');
   showChart();
};


function showChart() {
    $("#chartModal").modal('open');
}

