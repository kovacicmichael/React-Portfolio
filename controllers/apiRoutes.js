//
// Routes
//
// Route for getting all Portfolio items from the db
app.get("/portfolio", function(req, res) {

  db.Portfolio.find({})
    .then(function(dbPortfolio) {

      res.json(dbPortfolio);

    })
    .catch(function(err) {

      res.json(err);
    });
});

// Route for grabbing a specific Portfolio item by id, populate it with it's note
app.get("/portfolio/:id", function(req, res) {

  db.Portfolio.findOne({ _id: req.params.id })
    // .populate("note")  // do we need to populate anything on the portfolio? 
    .then(function(dbPortfolio) {

      res.json(dbPortfolio);
    })
    .catch(function(err) {

      res.json(err);
    });
});

// Route for getting Home page info
app.get("/", function(req, res) {

  db.Home.find({})
    .then(function(dbHome

      res.json(dbHome);

    })
    .catch(function(err) {

      res.json(err);
    });
});

// Route for getting Home page info
app.get("/home", function(req, res) {

  db.Home.find({})
    .then(function(dbHome

      res.json(dbHome);

    })
    .catch(function(err) {

      res.json(err);
    });
});

//Route for getting About page
app.get("/about", function(req, res) {

  db.About.find({})
    .then(function(dbStats) {

      res.json(dbStats);

    })
    .catch(function(err) {

      res.json(err);
    });
});

//Route for getting page stats
app.get("/stats", function(req, res) {

  db.PageStats.find({})
    .then(function(dbStats) {

      res.json(dbStats);

    })
    .catch(function(err) {

      res.json(err);
    });
});

// Route for updating an existing portfolio 
app.post("/portfolio/:id", function(req, res) {

  var portfolioID = req.params.id

  db.Portfolio.update(req.body)
    .then(function(dbPortfolio) {
      console.log("New Portfolio ID: " + dbPortfolio._id)
    })
    .then(function(dbPortfolio) {
      // If the Article was updated successfully, send it back to the client
      res.json(dbPortfolio);
    })
    .catch(function(dbPortfolio) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


// Route for updating an existing portfolio 
app.post("/portfolio", function(req, res) {

  db.Portfolio.create(req.body)
    .then(function(dbPortfolio) {
      console.log("New Portfolio ID: " + dbPortfolio._id)
    })
    .then(function(dbPortfolio) {
      // If the Article was updated successfully, send it back to the client
      res.json(dbPortfolio);
    })
    .catch(function(dbPortfolio) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});
// Route for saving/updating an Article's associated Note
app.post("/home", function(req, res) {

  db.Home.create(req.body)
    .then(function(dbPortfolio) {
      console.log("New Portfolio ID: " + dbHome._id)
    })
    .then(function(dbPortfolio) {
      // If the Article was updated successfully, send it back to the client
      res.json(dbPortfolio);
    })
    .catch(function(dbPortfolio) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


// Route for saving/updating 
app.post("/home/:ID", function(req, res) {

  var homeID = req.params.id

  db.Home.update(req.body)
    .then(function(dbPortfolio) {
      console.log("New Portfolio ID: " + dbHome._id)
    })
    .then(function(dbPortfolio) {
      // If the Article was updated successfully, send it back to the client
      res.json(dbPortfolio);
    })
    .catch(function(dbPortfolio) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
app.post("/about", function(req, res) {

  db.About.create(req.body)
    .then(function(dbPortfolio) {
      console.log("New Portfolio ID: " + dbAbout._id)
    })
    .then(function(dbPortfolio) {
      // If the Article was updated successfully, send it back to the client
      res.json(dbPortfolio);
    })
    .catch(function(dbPortfolio) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
app.post("/about/:ID", function(req, res) {

  var aboutID = req.params.id

  db.About.update(req.body)
    .then(function(dbPortfolio) {
      console.log("New Portfolio ID: " + dbAbout._id)
    })
    .then(function(dbPortfolio) {
      // If the Article was updated successfully, send it back to the client
      res.json(dbPortfolio);
    })
    .catch(function(dbPortfolio) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});
