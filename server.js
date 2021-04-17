const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3001 

require("./routes/htmlRoute")(app) 
require('./routes/apiRoute')(app)

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`));

