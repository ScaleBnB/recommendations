var mysql = require("mysql");
var con = mysql.createConnection({
  host: "52.55.144.68",
  port: "3306",
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
      "SELECT recommendations.id, recommendations.title, recommendations.price, \
      recommendations.homeType,recommendations.bedsNumber,recommendations.reviewsAverage,\
      recommendations.numberOfReviews,recommendations.likedStatus,recommendations.plusStatus,\
      recommendations.image1 from recommendations INNER JOIN listings ON listings.id = recommendations.listing_id WHERE listing_id = ?",
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
    plusStatus,image1) VALUES (?,?,?,?,?,?,?,?,?,?)",
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
        rec.image1
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
  updateRecommendation: (rec, callback) => {
    con.query(
      "UPDATE recommendations SET title = ?,price = ?,homeType = ?,\
    bedsNumber = ?,reviewsAverage = ?,numberOfReviews = ?,likedStatus = ?,\
    plusStatus = ?,image1 = ? WHERE id = ?",
      [
        rec.title,
        rec.price,
        rec.homeType,
        rec.bedsNumber,
        rec.reviewsAverage,
        rec.numberOfReviews,
        rec.likedStatus,
        rec.plusStatus,
        rec.image1,
        rec.id
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
  deleteRecommendation: (id, callback) => {
    con.query("DELETE FROM recommendations where id = ?", [id], function(
      err,
      results,
      fields
    ) {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  }
};
