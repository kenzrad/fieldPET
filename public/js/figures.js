var ctx = $('#chart-display');


//For now, we have temporary buttons to run various functions. Later we should allow more flexibility with drop-down menus and other options so the user can decide what to do (but this will be a quick way to get this going)
$("#test-chart-btn").on("click", function() {
    testChart();
    console.log("testing this chart shit")
});

$("#get-all-btn").on("click", function() {
    window.location = 'https://salty-savannah-46210.herokuapp.com/api/bugs'
});

$("#all-SF-btn").on("click", function() {
    $.get("/api/bugs/SF")
    .then(function(stoneflyData){
        getSfData(stoneflyData);
    })
    
    console.log("Getting Stonefly Data")
});

$("#lj-condition-btn").on("click", function() {
    getLjCondition();
    
});

$("#lower-james-MF-btn").on("click", function() {
    $.get('/api/bugs/M')
    .then(function(mayData){
        getLjMf(mayData);
    })

    console.log("Getting Mayfly Data");
    
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

function getSfData(data) {
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
                label: 'Stonefly Count',
                backgroundColor:'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: item.map(function(item){
                    return item.SF;
                })
        
            }]
        },
options: {}

    });

    $('#chart-title').text('Stone Fly Chart');
    showChart();
   
    console.log("This function will show us all the stonefly data, either organized by site or over time with sites color coded, who knows");
};

function getLjMf(data) {
   var item = data.map(function(item){
       return item;
   });
   item.sort(function(a,b){
       return new Date(a.date) - new DataCue(b.date);
   });

   new Chart(ctx, {
       type: 'line',
       data: {
           labels: item.map(function(item){
               return item.date;
           }),
           datasets: [{
               label: 'Mayfly Count',
               backgroundColor:'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: item.map(function(item){
                    return item.M;
                })

           }]
       },
       options: {}
   });
   $('#chart-title').text('Mayfly Count');
   showChart();
   
  
    console.log("This function will show us the number of mayflies in the james river over time");
};

function getLjCondition() {
    console.log("This function will show us the condition score of the james river over time -- this is a particularily complicated function, so we may change it quite a bit");
};


function showChart() {
    $("#chartModal").modal('open');
}
