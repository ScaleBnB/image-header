var db = require('../index.js');

module.exports = {
  gallery: {
    getImages = (params, callback) => {
      connection.query('SELECT * FROM images WHERE listing_id = ?', params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    },
    postImage = (params, callback) => {
      //can insert an object
      connection.query('INSERT INTO images (listing_id, image_url, image_caption, user_id) SET ?', params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    },
    updateImage = (params, callback) => {
      connection.query('UPDATE images SET image_url = ? WHERE id = ?', params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    },
    deleteImage = (params, callback) => {
      cconnection.query('DELETE FROM images WHERE id = ?', params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    }
  }
}









connection.query(`SELECT * FROM images WHERE listing_id = ${listing_id}`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.query(`SELECT * FROM images WHERE listing_id = ${listing_id}`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.query(`SELECT * FROM images WHERE listing_id = ${listing_id}`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = {
  gallery: {
    insertAll: (data, cb) => {
      db.insertMany(data)
        .then((docs) => {
          cb(null, docs);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getOne: (id, cb) => {
      db.find({ listing_id: Number(id) })
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getAll: (cb) => {
      db.find({})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    postOne: (id, cb) => {
      db.find({ listing_id: Number(id) })
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    updateOne: (id, cb) => {
      db.find({ listing_id: Number(id) })
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    deleteOne: (req, res) => {
      const id = req.params.id;
      db.deleteOne(id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.json(results);
        }
      });
    },
  },
};
