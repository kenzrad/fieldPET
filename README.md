# fieldPET
Full-stack field notes app for entering and visualizing stream water quality data

##  Some Buggy Background

![Bugs](http://cmwaterqualityproject.weebly.com/uploads/2/9/9/3/29939569/2730991_orig.jpg)

* Benthic Macroinvertebrates (stream bugs) are commonly used to assess water quality of freshwater streams on the East Coast

* The composition and quantity of the stream bug population can provide insights to the overall condition of the stream

* Certain groups of bugs, like stoneflys, are very sensitive to ecological disturbance (such as pollution)

![Stonefly](https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/stonefly-larva-nymph-plecoptera-perla-marginata-steinflue-urft-valley-art.jpg)

* Other groups of bugs are less sensitive (like midges). These bugs tend to indicate poor water quality when their numbers proportionally outweigh other less-tolerant species

![Midges](https://www.ohio-forum.com/wp-content/uploads/2018/08/Bloodworm.jpg)

* Benthic Macroinvertebrate Water Quality Monitoring is conducted by in large-part by volunteers, but also by  government employees, indsutry-professionals, and academics across the State of Virginia

* Because a great deal of the data are collected by volunteers, accessible information and efficient tools are important for maintaining high-quality data

* fieldPET aims to provide an easy-to-use field application, primarily used for collecting data. As a bonus, condition index scores are automatically calculated. Users are also able to access historical data, all in one app!


##  Technology and Tools

Field Pet uses several node packages, libraries, and frameworks.

MVC Framwork:
* `express` 
* `express-handlebars`

Database:
* `mysql2` 
* `sequelize`
* `sequelize-CLI`

Data-manipulation and visualization:
* `CSV-parser` -- parsing historical data and inputting larger batches of new data)
* `charts.js` -- charts and figure generation for viewing historical data

User experience:
* `materialize`
* `jQuery`


##  Walk-Through

FieldPET is a bug counting app that collects data of specific bugs in specific locations. This allows metrics contained within the app to determine water quality. 

Upon first entering the website a site volunteer with given credentials will input the quantity on each of the specific bugs:

![Opening Page](public/img/readMe/opening.png "Opening Page")


Next the user will hit submit and enter their credentials and the date the count was collected: 

![Login Page](public/img/readMe/login.png "Login Page")


Finally FieldPET will return with water quality information:

![Water Quality](public/img/readMe/waterQuality.png "Water Quality")


A user can also view graphs of information created by data used from the database:

![Metrics](public/img/readMe/metrics.png "Metrics")

![Scatter Plot](public/img/readMe/scattePlot.png "Scatter Plot")

## Acknowledgements and Contributions

Thank you to the Izaak Walton and VASOS league for data and resources

Kensey Barker (https://github.com/kenzrad) - Back End Framework and Data Processing, Charts integration, Metrics and Analysis

Thomas Smith (https://github.com/slowpossum)- Front End Development and Design, Logo and Icon Art, Optimization

Molly Levine(https://github.com/levinemr2) - API calls, Charts integration

Austin Kim (https://github.com/powerpcg5)- Data File Formatting, Research

