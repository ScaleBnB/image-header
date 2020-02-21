USE carousel_images;
LOAD DATA LOCAL INFILE '/Users/chamanova/Desktop/hrsf125/imageCarousel/user-numbers-2.csv'
INTO TABLE random_users
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(user_id);