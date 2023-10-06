const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const book = express();



const contactusRoute = require('./routes/contactus');
const messageRoute = require('./routes/success');

book.use(bodyParser.urlencoded({extended: false}));

book.use(contactusRoute);
book.use(messageRoute);

book.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

book.listen(8000);
