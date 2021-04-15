const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3001 

require("./public/routes/htmlRoute")(app) 
require('./public/routes/apiRoute')(app)

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`));


// have to link the two htmls correctly for the page to start working properly