const express = require("express");
const path = require("path");
// const {getListing} = require('../database/db.js');
// const db = require("../database/db.js");
const mySql = require("../database/mySql.js");
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/:id", express.static(path.join(__dirname, "../client/dist")));

//get a particular listing information from listing table;
app.get("/listings/:id", (req, res) => {
  mySql.getListingById(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

//get recommendations for a particular listing:
app.get("/listings/:id/recommendations", (req, res) => {
  mySql.getAllRecommendationsByListingId(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});
// post recommendation for particular listing, where req.body is formatted as following:
//  {
//   "listing_id": 5000000,
//   "title": "PostTitle",
//   "price": 328,
//   "homeType": "Entire place",
//   "bedsNumber": 4,
//   "reviewsAverage": 4.5,
//   "numberOfReviews": 39,
//   "likedStatus": 1,
//   "plusStatus": 0,
//   "image1": "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1",
//   "image2": "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo2",
//   "image3": "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3"
// };
app.post("/listings/:id/recommendations", function(req, res) {
  mySql.addRecommendation(req.params.id, req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.put("/put/listing", function(req, res) {
  console.log(req.body);
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

app.listen(port, () => console.log(`App listening on port ${port}`));
