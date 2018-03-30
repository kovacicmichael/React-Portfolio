//
// Routes


var mongoose = require("mongoose");

var db = require("./../models");
const router = require("express").Router();

console.log("api routes page")
module.exports = function(app){

console.log("exporting properly")



    // Route for getting all Portfolio items from the db
    app.get("/api/renderPage", function(req, res) {

      console.log("here in the get route")
  
      let promiseArray = [
        db.Portfolio.find({}),
        db.About.find({}),
        db.HomePage.find({})
      ];


      //console.log(promiseArray)

      Promise.all(promiseArray).then(function(values) {

        console.log(values)
          res.json({
            portfolio: values[0],
            about: values[1],
            homepage: values[2]
          });
          console.log("we are hereeeeee")

        }).catch(function(err) {

          res.json(err);
        });

      // db.Portfolio.find({})
      //   .then(function(dbPortfolio) {
      //     db.About.find({}).then(function(dbAbout) {
      //       db.HomePage.find({}).then(function(dbHomePage) {
      //           res.json({
      //             portfolio: dbPortfolio,
      //             about: dbAbout,
      //             homepage: dbHomePage
      //           });
      //       })
      //     })

      //   })
      //   .catch(function(err) {

      //     res.json(err);
      //   });

    });


    //Route for grabbing a specific Portfolio item by id, populate it with it's note
    //do not comment this out!
    app.get("/portfolioModal/:id", function(req, res) {

      db.Portfolio.findOne({ _id: req.params.id })
        // .populate("note")  // do we need to populate anything on the portfolio? 
        .then(function(dbPortfolio) {

          res.json(dbPortfolio);
        })
        .catch(function(err) {

          res.json(err);
        });
    });

    //Route for getting Home page info
    app.get("/home", function(req, res) {

      db.HomePage.find({})
        .then(function(dbHome){

          res.json(dbHome);

        })
        .catch(function(err) {

          res.json(err);
        });
    });

    // Route for getting Home page info
    app.get("/home", function(req, res) {

      db.HomePage.find({})
        .then(function(dbHome){

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

      db.HomePage.create(req.body)
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

      db.HomePage.update(req.body)
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

    // Route for saving/updating About (bio) information
    app.post("/about/:id", function(req, res) {

      var aboutID = req.params.id
      console.log(`aboutID: ${aboutID}`)
      console.log(`Req.body: ${JSON.stringify(req.body)}`)
      db.About.findOneAndUpdate({ _id: aboutID}, req.body)
        .then(function(dbAbout) {
          console.log("Updated About ID: " + dbAbout._id)
        })
        .then(function(dbAbout) {
          // If the Article was updated successfully, send it back to the client
          res.json(dbAbout);
        })
        .catch(function(dbAbout) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });

}
