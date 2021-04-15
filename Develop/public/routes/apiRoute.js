const notesData = require("../assets/js/index")

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(note))
    
    app.post("/api/notes", (req, res) =>{
        const newNotes = req.body;
        notesData.push(newNotes)
    })
}