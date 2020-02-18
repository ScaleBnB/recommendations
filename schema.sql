DROP DATABASE if exists sdc_project;
CREATE DATABASE sdc_project;
USE sdc_project;
CREATE TABLE listings (

  id int NOT NULL AUTO_INCREMENT,
  listingPrice int NOT NULLAUTO_INCREMENT,
  listingBedsNumber int,
  listingType VARCHAR(30),
  PRIMARY KEY (id)

);

CREATE TABLE recommendations (

  listing_id int NOT NULL,
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(50),
  price int,
  homeType VARCHAR(30),
  bedsNumber int,
  reviewsAverage float,
  numberOfReviews int,
  likedStatus BOOLEAN,
  plusStatus BOOLEAN,
  image1 VARCHAR(100),
  image2 VARCHAR(100),
  image3 VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings (id)

);