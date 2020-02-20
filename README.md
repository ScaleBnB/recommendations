

# API Routes:

 - get a particular listing data:
 
app.get("/listings/:id", (req, res) => {

     - req.params.id is the listing id 
     - response is json object containing listing info 
});

 - get recommendations of particular listing:
 
app.get("/listings/:id/recommendations", (req, res) => {

     - req.params.id is the listing id 
     - response is json object contains all recommendations for a particular listing
});

 - post a recommendation for particular listing:

app.post("/listings/:id/recommendations", function(req, res) {

     - req.body contains recommendation to be posted in format as following:
    {"title":"PostTitle","price": 328,"homeType": "Entire place","bedsNumber": 4,"reviewsAverage": 4.5,"numberOfReviews": 39,"likedStatus": 1,"plusStatus": 0,"image1": "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1","image2": "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo2","image3": "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3"}
     - req.params.id is the listing id 
     - response is empty;
});

 - update a recommendations:
 
app.put("/listings/:id/recommendations", function(req, res) {

     - req.body is similar to above
     - req.params.id is the listing id 
     - response is empty
});

 - delete a recommendation:

app.delete("/listings/:id/recommendations/:id", function(req, res) {

     - req.body contains information to be deleted (MORE INFORMATION TO BE PROVIDED)
     - req.params.id is the listing id 
     - response is empty
});
