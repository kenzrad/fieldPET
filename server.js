require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var csv = require('csv-parser');
var fs = require('fs');
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/html-routes")(app);
require("./routes/bugs-api-routes")(app);
require("./routes/sites-api-routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    // var bugData = [];
    // var siteData = [];
    //read csv file and create siteData object
    // fs.createReadStream(__dirname + "/models/data/cmcStations.csv")  
    //   .pipe(csv())
    //   .on('data', (row) => {
    //     console.log(row);
    //     db.Site.create({row})
    //     // db.Site.create( row );
    //   })
    //   .on('end', () => {
        // for(var i = 0; i < siteData.length; i++) {
        //   db.Site.create({
        //     Code: siteData[i].Code,
        //     Name: siteData[i].Name,
        //     NameLong: siteData[i].NameLong,
        //     Lat: siteData[i].Lat,
        //     Long: siteData[i].Long,
        //     Cbseg: siteData[i].Cbseg,
        //     WaterBody: siteData[i].WaterBody,
        //     Description: siteData[i].siteData,
        //     Datum: siteData[i].Datum,
        //     CityCounty: siteData[i].CityCounty,
        //     Tidal: siteData[i].Tidal,
        //     Comments: siteData[i].Comments,
        //     Fips: siteData[i].Fips,
        //     Huc12: siteData[i].Huc12,
        //     State: siteData[i].State,
        //     Huc6Name: siteData[i].Huc6NameG
        //   })
        // }
        console.log('cmcStations.csv File successfully processed');
      }
    );

    //read csv file and create bugData object
    // fs.createReadStream(__dirname + "/models/data/bugs.csv")  
    //   .pipe(csv())
    //   .on('data', (row) => {
    //     db.Bugs.create({ row });
    //   })
    //   .on('end', () => {
        // for(var i = 0; i< bugData.length; i++) {
          // db.Bugs.create({
          //   site: bugData[i].site,
          //   date: bugData[i].date,
          //   beetles: bugData[i].beetles,
          //   blackflies: bugData[i].blackflies,
          //   clams: bugData[i].clams,
          //   common_netspinners: bugData[i].common_netspinners,
          //   crayfish: bugData[i].crayfish,
          //   dragonflies_damselflies: bugData[i].dragonflies_damselflies,
          //   flatworms: bugData[i].flatworms,
          //   fw_shrimp: bugData[i].fw_shrimp,
          //   gilled_snails: bugData[i].gilled_snails,
          //   gomphidae: bugData[i].gomphidae,
          //   hellgrammites: bugData[i].hellgrammites,
          //   leeches: bugData[i].leeches,
          //   lunged_snails: bugData[i].lunged_snails,
          //   mayflies: bugData[i].mayflies,
          //   midges: bugData[i].midges,
          //   most_caddisflies: bugData[i].most_caddisflies,
          //   most_true_flies: bugData[i].most_true_flies,
          //   other: bugData[i].other,
          //   scuds: bugData[i].scuds,
          //   sowbugs: bugData[i].sowbugs,
          //   stoneflies: bugData[i].stoneflies,
          //   true_bugs:bugData[i].true_bugs,
          //   worms: bugData[i].worms
          // });
        // }

    //     console.log('bugs.csv file successfully processed');
    //   }
    // );

    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
