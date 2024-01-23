const express = require('express')
const router = express.Router();

// GET /comments
router.get('/', (req, res) => res.json(comments));

// POST /comments
router.post('/', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
});


module.exports = router;