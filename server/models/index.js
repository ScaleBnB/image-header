const mongoose = require('mongoose');
// const mongoUrl = 'mongodb://database/gallery';
const mongoUrl = 'mongodb://localhost/gallery';
const db = require('../db');

mongoose.connect(mongoUrl, { server: { reconnectTries: Number.MAX_VALUE } });

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

    putOne: (id, cb) => {
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

    deleteAll: (cb) => {
      db.deleteMany({})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },
};
