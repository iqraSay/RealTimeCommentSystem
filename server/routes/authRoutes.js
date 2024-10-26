const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const sessions = {};

router.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    const sessionId = uuidv4();
    sessions[sessionId] = { username };

    res.json({ sessionId, username });
});

module.exports = router;
