--load to mySQL
LOAD DATA LOCAL INFILE '/Users/polina/Documents/HR_Projects/SDC/recommendations/test.csv' 
INTO TABLE recommendations 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

--load to Cassandra
COPY sdc_project.recommendations (listing_id,id,title,price,hometype,bedsnumber,reviewsaverage,numberofreviews,likedstatus,plusstatus,image1,image2,image3)
FROM '/Users/polina/Documents/HR_Projects/SDC/recommendations/test.csv' WITH DELIMITER=',';