const express = require('express');
const router = express.Router();
const debug = require("debug")("comments");

module.exports = (io, db) => {
  // GET /api/comments
  router.get('/', (req, res) => {
    const query = "SELECT * FROM comments ORDER BY timestamp DESC";
    db.query(query, (err, results) => {
      if (err) {
        debug("Error fetching comments:", err);
        return res.status(500).send(err);
      }
      debug("Fetched comments:", results);
      res.json(results);
    });
  });

  // POST /api/comments
  router.post('/', (req, res) => {
    const { username, comment } = req.body;
    const query = "INSERT INTO comments (username, comment) VALUES (?, ?)";
    db.query(query, [username, comment], (err, results) => {
      if (err) {
        debug("Error inserting comment:", err);
        return res.status(500).send(err);
      }

      const newComment = { id: results.insertId, username, comment, timestamp: new Date() };
      io.emit("new-comment", newComment);  
      debug("New comment added:", newComment);
      res.status(201).json(newComment);
    });
  });

  return router;
};
