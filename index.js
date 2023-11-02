const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

const homeController = require('./controllers/homeController.js');

app.use('/', homeController);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})