const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());



app.get("/notes", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM notes").all();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});



app.post("/notes", (req, res) => {
  try {
    const { title, content } = req.body;

    const result = db
      .prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
      .run(title, content);

    res.json({
      id: result.lastInsertRowid,
      title,
      content,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});



app.put("/notes/:id", (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    db.prepare(
      "UPDATE notes SET title = ?, content = ? WHERE id = ?"
    ).run(title, content, id);

    res.json({ message: "Note updated successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});



app.delete("/notes/:id", (req, res) => {
  try {
    const { id } = req.params;

    db.prepare("DELETE FROM notes WHERE id = ?").run(id);

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});