const models = require('../models');
const jsonData = require('./dummydata.js');


let count = 1;
const dataExtract = jsonData.map((obj) => {
  const extract = {
    listing_id: count,
    listing_title: obj.pdp_listing_detail.name,
    listing_images: obj.pdp_listing_detail.photos.map((photoObj) => ({
      id: photoObj.id,
      url: photoObj.picture,
      caption: photoObj.caption,
    })),
  };
  count += 1;

  return extract;
});

models.gallery.insertAll(dataExtract, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(`Successfully inserted ${data.length} documents`);
});
