const fs = require("fs");
const faker = require("faker");
filename = "recommendations.csv";
var id = 1;
for (var i = 1; i <= 10000000; i++) {
  let listing_id = i;
  let randomNumber = Math.floor(Math.random() * 10 + 3);
  for (var j = 1; j <= randomNumber; j++) {
    let title = faker.lorem.sentence().slice(0, 5);
    let price = Math.floor(Math.random() * 500) + 60;
    let homeType = ["Entire place", "Private room", "Shared room"][
      Math.floor(Math.random() * 3)
    ];
    let bedNumner = Math.floor(Math.random() * 3) + 1;
    let reviewsAverage =
      Math.floor(Math.random() * (5 * 10 - 1 * 10) + 1 * 10) / (1 * 10);
    let numberOfReviews = Math.floor(Math.random() * 100) + 1;
    let likedStatus = Math.floor(Math.random() * 1 + 0.5);
    let plusStatus = Math.floor(Math.random() * 1 + 0.5);
    let image1 = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1`;
    let image2 = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo2`;
    let image3 = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3`;
    let tempString = `${listing_id},${id},${title},${price},${homeType},${bedNumner},${reviewsAverage},${numberOfReviews},${likedStatus},${plusStatus},${image1},${image2},${image3}\n`;
    fs.appendFileSync(filename, tempString);
    if (i % 100000 === 0) {
      console.log("loaded: " + i);
    }
    id = id + 1;
  }
}
