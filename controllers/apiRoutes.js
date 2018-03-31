//
// Routes


var mongoose = require("mongoose");

var db = require("./../models");
const router = require("express").Router();

console.log("api routes page")
module.exports = function(app){

  console.log("exporting properly")



    // Route for getting all Portfolio items and profile information from the db
    app.get("/api/renderPage", function(req, res) {

      console.log("here in the renderPage route")
  
      let promiseArray = [
        db.Portfolio.find({}),
        db.About.find({}),
        // db.Contact.find({})
      ];

      Promise.all(promiseArray).then(function(values) {

        console.log(values)
          res.json({
            portfolio: values[0],
            about: values[1],
            // contact: values[2]
          });
          console.log("we are hereeeeee")

        }).catch(function(err) {

          res.json(err);
        });

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

    //Route for getting contact
    app.get("/contacts", function(req, res) {

      db.Contact.find({})
        .then(function(dbContacts){

          res.json(dbContacts);

        })
        .catch(function(err) {

          res.json(err);
        });
    });

    // Route for getting Home page info
    // app.get("/home", function(req, res) {

    //   db.HomePage.find({})
    //     .then(function(dbHome){

    //       res.json(dbHome);

    //     })
    //     .catch(function(err) {

    //       res.json(err);
    //     });
    // });

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

      db.Portfolio.findOneAndUpdate(req.body)
        .then(function(dbPortfolio) {
          console.log("Updated Portfolio ID: " + dbPortfolio._id)
        })
        .then(function(dbPortfolio) {
          // If the Article was updated successfully, send it back to the client
          res.json(dbPortfolio);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });

    // Route for deleting an existing portfolio 
    app.delete("/portfolio/:id", function(req, res) {

      var portfolioID = req.params.id

      db.Portfolio.remove({ _id: portfolioID })
        .then(function(dbPortfolio) {
          console.log("Deleted Portfolio ID: " + portfolioID)
        })
        .then(function(dbPortfolio) {
          res.json(dbPortfolio);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });

    // Route for adding a new portfolio project 
    app.post("/portfolio", function(req, res) {
      console.log(`Inside the /portfolio POST route.`)
      console.log(req.body)
      db.Portfolio.create(req.body)
        .then(function(dbPortfolio) {
          console.log("New Portfolio ID: " + dbPortfolio._id)
        })
        .then(function(dbPortfolio) {

          res.json(dbPortfolio);
        })
        .catch(function(err) {

          res.json(err);
        });
    });
    // Route for saving/updating an Article's associated Note
    // app.post("/home", function(req, res) {

    //   db.HomePage.create(req.body)
    //     .then(function(dbPortfolio) {
    //       console.log("New Portfolio ID: " + dbHome._id)
    //     })
    //     .then(function(dbPortfolio) {
    //       // If the Article was updated successfully, send it back to the client
    //       res.json(dbPortfolio);
    //     })
    //     .catch(function(err) {
    //       // If an error occurs, send it back to the client
    //       res.json(err);
    //     });
    // });


    // Route for saving/updating 
    // app.post("/home/:ID", function(req, res) {

    //   var homeID = req.params.id

    //   db.HomePage.update(req.body)
    //     .then(function(dbPortfolio) {
    //       console.log("New Portfolio ID: " + dbHome._id)
    //     })
    //     .then(function(dbPortfolio) {
    //       // If the Article was updated successfully, send it back to the client
    //       res.json(dbPortfolio);
    //     })
    //     .catch(function(err) {
    //       // If an error occurs, send it back to the client
    //       res.json(err);
    //     });
    // });

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
        .catch(function(err) {
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
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });

}
