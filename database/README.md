app.get("/listings/:id", (req, res) => {
  //get a particular listing data, where req.params.listingId is the id passed in in the body
  //expected to recieve json object in response
});

app.post("/listing", function(req, res) {
  //post a listing where req.body should contain the object with listing information to ba saved in database
  db.addListing(req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.put("/listing", function(req, res) {
  //update listing information where req.dody should contain information about what listing and what information
  //in that listing to be updated
  db.updateListing(req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete("/listing", function(req, res) {
  //delete listing information where req.body should contain the information about that listing that needs to be deleted
  db.deleteListing(req.body, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});