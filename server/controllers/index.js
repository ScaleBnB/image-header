const models = require('../models');

module.exports.getImages = (req, res) => {
  const id = parseInt(req.params.id);
  models.gallery.getImages(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
};

module.exports.postImage = (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const image = {
    listing_id: id,
    image_url: data.image_url,
    image_caption: data.image_caption,
    user_id: data.user_id
  }
  models.gallery.postImage(image, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json('posted');
    }
  });
}

module.exports.updateImage = (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const image = {
    listing_id: id,
    image_url: data.image_url,
    image_caption: data.image_caption,
    user_id: data.user_id,
  }
  models.gallery.updateImage(image, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json('posted');
    }
  });
}

module.exports.deleteImage = (req, res) => {
  const id = req.params.id;
  models.gallery.deleteImage(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      res.end('delete successful!');
    }
  });
}
