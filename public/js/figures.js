var ctx = $('#chart-display');


//For now, we have temporary buttons to run various functions. Later we should allow more flexibility with drop-down menus and other options so the user can decide what to do (but this will be a quick way to get this going)

$("#get-all-btn").on("click", function() {
    window.location = 'https://salty-savannah-46210.herokuapp.com/api/bugs'
});

$("#bug-counts-btn").on("click", function() {
    $.get("/api/bugs/SF")
    .then(function(allBugData){
        lineChart(allBugData);
    })
    console.log("Getting Stonefly Data")
});

$("#site-condition-btn").on("click", function() {
    getSiteCondition();
    
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

    $('#chart-title').text('Bug Count');
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
   $('#chart-title').text('Mayfly Count');
   showChart();
   
  
//     console.log("This function will show us the number of mayflies in the james river over time");
};

function getSiteCondition() {
    console.log("This function will show us the condition score of the james river over time -- this is a particularily complicated function, so we may change it quite a bit");
};


function showChart() {
    $("#chartModal").modal('open');
}

