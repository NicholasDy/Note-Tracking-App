const notesData = require("../db/db.json")
const uniqid = require('uniqid');
//used for generating a unique id for the posts
let id = {};

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData))


    app.post("/api/notes", (req, res) => {
        // build an ID here 

        // merge the ID with the req
        // push the new item to the db
        var newId = uniqid(); 
        let id = { "id": newId };
        let newNotes = req.body;
        console.log(id)
        notesData.push(id)
        notesData.push(newNotes)
    })
}
