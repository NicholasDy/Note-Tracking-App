const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001

require('./Routes/htmlRoute')(app)
require('./Routes/apiRoute')(app)

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`));


// have to link the two htmls correctly for the page to start working properly