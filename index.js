const express = require('express');
const layouts = require("express-ejs-layouts");
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('public'));

const homeController = require('./controllers/homeController.js');

app.use('/', homeController);
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})