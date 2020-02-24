require('newrelic');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const controller = require('./controllers/index.js');
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/listing/:id/images', controller.getImages);

app.post('/listing/:id/images', controller.postImage);

app.put('/listing/:id/images', controller.updateImage)

app.delete('/listing/:id/images', controller.deleteImage);


app.listen(port, () => console.log(`Server listening on port ${port}!`));
