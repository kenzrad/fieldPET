function calculateMetrics(bugData){

    //getting bug total
    var total = 0;
    var indexScore = 0;
    var condition = "";
    var newBugs = {};

    for (pair of bugData) {
        if (pair.value !== "") {
          newBugs[pair.name] = pair.value;
          total += parseInt(pair.value);
        }
        else {
            newBugs[pair.name] = 0;
        }
      }

    // creating metrics object (6 metrics)
    var metrics = [];

    for (i = 0; i < 6; i ++) {
        metrics[i] = {
            metric: parseInt(i + 1),
            score: 0,
            rating: 0,
        };
    }

    //metric1: mayflies + stoneflies + most_caddiflies / total * 100
    function metricOneCalc(metric) {
        metric.score = (parseInt(newBugs.M) + parseInt(newBugs.SF) + parseInt(newBugs.MC)) /total * 100;

        if (metric.score > 32.2) {
            metric.rating = 2;
            indexScore += 2;
        }
        else if (metric.score < 16.1) {
            metric.rating = 0;
        }
        else {
            metric.rating = 1;
            indexScore ++;
        };
    }
    //metric2: common_netspinners / total * 100
    function metricTwoCalc(metric) {
        metric.score = parseInt(newBugs.CN) / total * 100;
    
        if (metric.score < 19.7) {
            metric.rating = 2;
            indexScore += 2;
        }
        else if (metric.score > 34.5) {
            metric.rating = 0;
        }
        else {
            metric.rating = 1;
            indexScore ++;
        };
    }
    //metric3: lunged snails / total * 100
    function metricThreeCalc(metric) {
        metric.score = parseInt(newBugs.LS) / total * 100;
    
        if (metric.score < 0.3) {
            metric.rating = 2;
            indexScore += 2;
        }
        else if (metric.score > 1.5) {
            metric.rating = 0;
        }
        else {
            metric.rating = 1;
            indexScore ++;
        };
    }
    //metric4: beetles / total * 100
    function metricFourCalc(metric) {
        metric.score = parseInt(newBugs.B) / total * 100;
    
        if (metric.score > 6.4) {
            metric.rating = 2;
            indexScore += 2;
        }
        else if (metric.score < 3.2) {
            metric.rating = 0;
        }
        else {
            metric.rating = 1;
            indexScore ++;
        };
        console.log(`metric 4 score is:${metric.score}`)
    }
    //metric5 (tolerant): worms + flatworms + leeches + sowbugs + scuds + dragonflies + midges + blackflies + lungedsnails + clams / total * 100
    function metricFiveCalc(metric) {
        metric.score = (parseInt(newBugs.W) + parseInt(newBugs.F) + parseInt(newBugs.L) + parseInt(newBugs.SB) + parseInt(newBugs.SC) + parseInt(newBugs.DD) + parseInt(newBugs.MI) + parseInt(newBugs.BF) + parseInt(newBugs.LS) + parseInt(newBugs.CL)) / total * 100;
    
        if (metric.score < 46.7) {
            metric.rating = 2;
            indexScore += 2;
        }
        else if (metric.score > 61.5) {
            metric.rating = 0;
        }
        else {
            metric.rating = 1;
            indexScore ++;
        };
    }
    //metric6 (non-insects): worms + flatworms + leeches + crayfish + sowbugs + scuds + gilled_snails + lunged_snails + clams / total * 100
    function metricSixCalc(metric) {
        metric.score = ((parseInt(newBugs.W) + parseInt(newBugs.F) + parseInt(newBugs.L) + parseInt(newBugs.C) + parseInt(newBugs.SB) + parseInt(newBugs.SC) + parseInt(newBugs.GS) + parseInt(newBugs.LS) + parseInt(newBugs.CL))) / total * 100;

        if (metric.score < 5.4) {
            metric.rating = 2;
            indexScore += 2;
        }
        else if (metric.score > 20.8) {
            metric.rating = 0;
        }
        else {
            metric.rating = 1;
            indexScore ++;
        };
    }


    function conditionAnalysis(score) {
        console.log("score:" + score)
        if (score > 8) {
            condition = "Acceptable Ecological Condition";
        }
        else if (score === 0) {
            condition = "Inconclusive / Gray Zone";
        }
        else {
            condition = "Unacceptable Ecological Conditions";
        }

        console.log(`Conditions: ${condition}`)
        //generate modal for this information (include stream name, condition score, and condition interpretation)

        $("#condition-text").text(condition);
        //Later, we can have a nice image here for the various index scores
        // $("condition-image").src(conditionImg);
        $('#conditionModal').modal('open');
    }

   metricOneCalc(metrics[0]);
   metricTwoCalc(metrics[1]);
   metricThreeCalc(metrics[2]);
   metricFourCalc(metrics[3]);
   metricFiveCalc(metrics[4]);
   metricSixCalc(metrics[5]); 
   conditionAnalysis(indexScore);

};