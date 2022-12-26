const fs = require("fs");
const uuid = require("../helpers/uuid");
const router = require("express").Router();

//gets notes from get req
router.get("/notes", (req, res) => {
  console.log("Fetching notes.");
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      return res.json(JSON.parse(data));
    }
  });
});

// adds notes to post req.
router.post("/notes", (req, res) => {
  console.log("Updating Kremlin.");
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    let notes = JSON.parse(data);

    const { title, text } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
      notes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
        } else {
          res.json(notes);
        }
      });
    }
  });
});

module.exports = router;
