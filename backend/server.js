const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.get("/notes", (req, res) => {
  db.all("SELECT * FROM notes", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});


app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  db.run(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        id: this.lastID,
        title,
        content,
      });
    }
  );
});


app.put("/notes/:id", (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  db.run(
    "UPDATE notes SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({ message: "Note updated successfully" });
    }
  );
});


app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM notes WHERE id = ?", id, function (err) {
    if (err) return res.status(500).json(err);

    res.json({ message: "Note deleted successfully" });
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});