"use strict";
module.exports = {
  generateRandomData
};

const faker = require("faker");

function generateRandomData(Context, events, done) {
  const listing_id = Math.floor(Math.random() * 10000000 + 1);
  const title = faker.lorem.sentence().slice(0, 5);
  const price = Math.floor(Math.random() * 500) + 60;
  const homeType = ["Entire place", "Private room", "Shared room"][
    Math.floor(Math.random() * 3)
  ];
  const bedsNumber = Math.floor(Math.random() * 3) + 1;
  const reviewsAverage =
    Math.floor(Math.random() * (5 * 10 - 1 * 10) + 1 * 10) / (1 * 10);
  const numberOfReviews = Math.floor(Math.random() * 100) + 1;
  const likedStatus = Math.floor(Math.random() * 1 + 0.5);
  const plusStatus = Math.floor(Math.random() * 1 + 0.5);
  const image1 = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1`;
  const image2 = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo2`;
  const image3 = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3`;
  Context.vars.listing_id = listing_id;
  Context.vars.title = title;
  Context.vars.price = price;
  Context.vars.homeType = homeType;
  Context.vars.bedsNumber = bedsNumber;
  Context.vars.reviewsAverage = reviewsAverage;
  Context.vars.numberOfReviews = numberOfReviews;
  Context.vars.likedStatus = likedStatus;
  Context.vars.plusStatus = plusStatus;
  Context.vars.image1 = image1;
  Context.vars.image2 = image2;
  Context.vars.image3 = image3;
  return done();
}
