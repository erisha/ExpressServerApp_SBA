const express = require('express')
const router = express.Router();

// GET /posts
router.get('/', (req, res) => res.json(posts));

// POST - create post  /posts
router.post('/', (req, res) => {
    const newPost =req.body;
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PATCH- update /posts/:id
router.patch('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    res.json({message: `Post ${postId} has been updated`})
});

// Delete - delete post /posts/:id
router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    res.json({message: `Post with ID ${postId} has been deleted`})
});


module.exports = router;