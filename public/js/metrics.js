function calculateMetrics(bugData){

    //getting bug total
    var total = 0;
    var indexScore = 0;
    var condition = "";

    for(var key in bugData) {
        total += parseInt(bugData[key]);
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
        metric.score = parseInt(bugData.mayflies + bugData.stoneflies + bugData.most_caddisflies) / total * 100;

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
        metric.score = parseInt(bugData.common_netspinners) / total * 100;
    
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
        metric.score = parseInt(bugData.lunged_snails) / total * 100;
    
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
        metric.score = parseInt(bugData.beetles) / total * 100;
    
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
    }
    //metric5 (tolerant): worms + flatworms + leeches + sowbugs + scuds + dragonflies + midges + blackflies + lungedsnails + clams / total * 100
    function metricFiveCalc(metric) {
        metric.score = parseInt(bugData.worms + bugData.flatworms + bugData.leeches + bugData.sowbugs + bugData.scuds + bugData.dragonflies_damselflies + bugData.midges + bugData.blackflies + bugData.lunged_snails + bugData.clams) / total * 100;
    
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
        metric.score = parseInt(bugData.worms + bugData.flatworms + bugData.leeches + bugData.Crayfish + bugData.sowbugs + bugData.scuds + bugData.gilled_snails + bugData.lunged_snails + bugData.clams) / total * 100;
    
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
    }

   metricOneCalc(metrics[0]);
   metricTwoCalc(metrics[1]);
   metricThreeCalc(metrics[2]);
   metricFourCalc(metrics[3]);
   metricFiveCalc(metrics[4]);
   metricSixCalc(metrics[5]); 
   conditionAnalysis(indexScore);

};