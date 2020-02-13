const express = require("express");
const path = require("path");
// const {getListing} = require('../database/db.js');
const db = require("../database/db.js");

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../client/dist")));

// handler for get requests for all listings
app.get("/listings", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  db.getAllListings((error, listingsArr) => {
    if (error) {
      console.log(error);
      res.status(500).end();
    } else {
      console.log("get request is successful");
      res.status(200).send(listingsArr);
    }
  });
});

app.post("/post/listing", function(req, res) {
  db.addListing(req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.put("/put/listing", function(req, res) {
  db.updateListing(req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete("/delete/listing", function(req, res) {
  db.deleteListing(req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// handler for get requests for specific id
// app.get('/listings/:listingId', (req, res) => {
//     console.log("req.params", req.params);
//     const id = req.params;
//     getListing(id, (error, listingObject) => {
//         if (error) {
//             res.status(500).end();
//             console.log("error")
//         } else {
//             res.status(200).send(listingObject);
//             console.log("recommendations", listingObject.recommendations)
//         }
//     })
// })

app.listen(port, () => console.log(`App listening on port ${port}`));
