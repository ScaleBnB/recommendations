import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 200,
  duration: "10s"
};

// Post operations testing
export default function() {
  let recommendation = {
    listing_id: Math.floor(Math.random() * 10000000 + 1),
    price: 260,
    homeType: "Entire place",
    bedsNumber: 2,
    reviewsAverage: 4.5,
    numberOfReviews: 15,
    likedStatus: 1,
    plusStatus: 0,
    image1: `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1`,
    image2: `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo2`,
    image3: `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3`
  };
  var payload = JSON.stringify(recommendation);
  var params = { headers: { "Content-Type": "application/json" } };
  const res = http.post(
    `http://localhost:3002/listings/${recommendation.listing_id}/recommendations`,
    payload,
    params
  );
  check(res, {
    "status was 200": r => r.status === 200
  });
  sleep(0.1);
}
