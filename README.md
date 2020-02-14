

# API Routes:

 - get a particular listing data:
 
app.get("/listings/:id", (req, res) => {

    req.params.listingId is the id passed in the body
    response is json object (TO BE SPECIFIED IN MORE DETAIL) 
});

 - post a listing:

app.post("/listings", function(req, res) {

    req.body should contain the object with listing information to ba saved in database (TO BE SPECIFIED IN MORE DETAIL)
    response is empty;
});

 - update a listing:
 
app.put("/listings/:id", function(req, res) {

    req.params.listingId is the id passed in in the body
    req.dody should contain information to be updated ( TO BE SPECIFIED IN MORE DETAIL)
    response is empty
});

 - delete a listing:

app.delete("/listings/:id", function(req, res) {

    req.body should contain the information about that listing that needs to be deleted (TO BE SPECIFIED IN MORE DETAIL)
    response in empty
});


 - get recommendations of particular listing:
 
app.get("/listings/:id/recommendations", (req, res) => {

    req.param.listingId contains listingId
    response is json object contains all recommendations for a particular listing (TO BE SPECIFIED IN MORE DETAIL)
});

 - post a recommendation for particular listing:

app.post("/listings/:id/recommendations", function(req, res) {

    req.body recommendations (TO BE SPECIFIED IN MORE DETAIL)
    req.param.listingId contains listingId
    response is empty;
});

 - update a recommendations:
 
app.put("/listings/:id/recommendations", function(req, res) {

    req.body contains information to be updated (TO BE SPECIFIED IN MORE DETAIL)
    req.param.listingId contains listingId
    response is empty
});

 - delete a recommendation:

app.delete("/listings/:id/recommendations/:id", function(req, res) {

    req.body contains information to be deleted (MORE INFORMATION TO BE PROVIDED)
    req.param.listingId contains listingId
    response is empty
});
