

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


 - get recommendations of particular listing:
 
app.get("/listings/:id/recommendations", (req, res) => {

    req.body contains recommendations
    req.param.listingId contains listingId
    response is json object contains all recommendations
});

 - post a recommendation for particular listing:

app.post("/listing/:id/recommendation", function(req, res) {

    req.body recommendations
    req.param.listingId contains listingId
    response is empty;
});

 - update a recommendations:
 
app.put("/listing/:d/recommendation", function(req, res) {

    req.body contains information to be updated
    req.param.listingId contains listingId
    response is empty
});

 - delete a recommendation:

app.delete("/listing/:id/recommendation", function(req, res) {

    req.body contains information to be updated
    req.param.listingId contains listingId
    response is empty
});
