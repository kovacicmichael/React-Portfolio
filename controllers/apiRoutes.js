// api Routes

var mongoose = require("mongoose");

var db = require("./../models");

var keys = require("./../keys.js")
const router = require("express").Router();
require("dotenv").config();

const api_key = process.env.api_key;
const domain = 'sandbox8d75e1ca83c6447fb6b5de2cf82c6055.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

console.log("api routes page")

module.exports = function(app){

  console.log("exporting properly")

  // Route for getting all Portfolio items and profile information from the db
  app.get("/api/renderPage", function(req, res) {

    console.log("here in the renderPage route")

    let promiseArray = [
      db.Portfolio.find({}),
      db.Contact.find({})
    ];

    Promise.all(promiseArray).then(function(values) {
      //console.log(promiseArray)
        res.json({
          portfolio: values[0],
          contacts: values[1]
        });
      }).catch(function(err) {
        res.json(err);
      });
  });

  //Route for grabbing a specific Portfolio item by id, populate it with it's note
  //do not comment this out!
  app.get("/portfolioModal/:id", function(req, res) {

    db.Portfolio.findOne({ _id: req.params.id })
      .then(function(dbPortfolio) {
        res.json(dbPortfolio);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Route for getting all contacts
  app.get("/contacts", function(req, res) {
    db.Contact.find({})
      .then(function(dbContacts){
        res.json(dbContacts);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Route for adding a new contact 
  app.post("/contacts", function(req, res) {

    console.log(`Inside the /contact POST route.`)
    console.log(req.body)

    
    var data = {
      from: req.body.email,
      to: 'kovacic316@gmail.com',
      subject: req.body.subject,
      text: "Sender Name: " + req.body.name + " \n" + "Message: " + req.body.message,
    };
 
    db.Contact.create(req.body)
      .then(function(dbContact) {
        console.log("New Contact ID: " + dbContact._id)
      })
      .then(mailgun.messages().send(data, function (error, body) {
        if(error){
          console.log(error)
        }else{
          res.send(true)
        }
      }))
      .catch(function(err) {
        res.json(err);
      });


    

      
  });

  // Route for deleting an existing contact 
  app.delete("/contacts/:id", function(req, res) {

    var contactID = req.params.id

    db.Contact.remove({ _id: contactID })
      .then(function(dbContact) {
        console.log("Deleted Contact ID: " + contactID)
      })
      .then(function(dbContact) {
        res.json(dbContact);
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

    console.log(`Portfolio ID to Update: ${portfolioID}`);
    console.log(req.body);

    db.Portfolio.findOneAndUpdate({ _id: portfolioID}, req.body)
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


  // Route for saving/updating About (bio) information
  app.post("/about/:id", function(req, res) {

    var aboutID = req.params.id
    console.log(`aboutID: ${aboutID}`)
    console.log(`Req.body: ${JSON.stringify(req.body)}`)
    db.About.findOneAndUpdate({ _id: aboutID}, req.body, {upsert: true})
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










