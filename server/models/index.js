var connection = require('../db/index.js');

module.exports = {
  gallery: {
    getImages: (params, callback) => {
      connection.query(`SELECT * FROM images WHERE listing_id = ?`, params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    },
    postImage: (params, callback) => {
      connection.query(`INSERT INTO images SET ?`, params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    },
    updateImage: (params, callback) => {
      connection.query(`UPDATE images SET ? WHERE id = ${params.listing_id}`, params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    },
    deleteImage: (params, callback) => {
      connection.query(`DELETE FROM images WHERE id = ?`, params, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          callback(null, results);
        }
      })
    }
  }
}
