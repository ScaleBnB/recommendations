CREATE KEYSPACE sdc_project WITH replication = {'class': 'SimpleStrategy','replication_factor': '1'}
AND durable_writes = 'true';
USE sdc_project;
CREATE TABLE recommendations (

  listing_id int,
  id int,
  title text,  price int,
  homeType text,
  bedsNumber int,
  reviewsAverage float,
  numberOfReviews int,
  likedStatus BOOLEAN,
  plusStatus BOOLEAN,
  image1 text,
  image2 text,
  image3 text,
  PRIMARY KEY (listing_id,id)
);




