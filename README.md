

# API Routes:

 - get a particular listing data:
 
app.get("/listings/:id", (req, res) => {

    req.params.listingId is the id passed in in the body
    response is json object
});

 - post a listing:

app.post("/listing", function(req, res) {

    req.body should contain the object with listing information to ba saved in database
    response is empty;
});

 - update a listing:
 
app.put("/listing", function(req, res) {

    req.dody should contain information to be update
    response is empty
});

 - delete a listing:

app.delete("/listing", function(req, res) {

    req.body should contain the information about that listing that needs to be deleted
    response in empty
});
