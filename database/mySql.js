var mysql = require("mysql");
var con = mysql.createConnection({
  user: "root",
  database: "sdc_project"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {
  getListingById: (id, callback) => {
    con.query("SELECT * FROM listings WHERE id = ?", [id], function(
      err,
      results,
      fields
    ) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getAllRecommendationsByListingId: (id, callback) => {
    con.query(
      "SELECT * FROM recommendations WHERE listing_id = ?",
      [id],
      function(err, results, fields) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },
  addRecommendation: (id, rec, callback) => {
    con.query(
      "INSERT INTO recommendations (listing_id, title, price,\
    homeType,bedsNumber,reviewsAverage,numberOfReviews,likedStatus,\
    plusStatus,image1,image2,image3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        id,
        rec.title,
        rec.price,
        rec.homeType,
        rec.bedsNumber,
        rec.reviewsAverage,
        rec.numberOfReviews,
        rec.likedStatus,
        rec.plusStatus,
        rec.image1,
        rec.image2,
        rec.image3
      ],
      function(err, results, fields) {
        if (err) {
          callback(err);
        } else {
          callback();
        }
      }
    );
  },
  deleteListing: (listingId, callback) => {}
};
