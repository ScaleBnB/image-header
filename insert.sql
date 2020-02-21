USE carousel_images;
LOAD DATA LOCAL INFILE '/Users/chamanova/Desktop/hrsf125/imageCarousel/scalebnb_dummy_data_5e6_10e6.csv' 
INTO TABLE images 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(listing_id,user_id,image_url,image_caption);