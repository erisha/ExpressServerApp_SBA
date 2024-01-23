const express = require('express')
const router = express.Router();

// GET 
router.get('/', (req,res) => res.json(users));

// POST - create user  /users
router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser)// successfully created newUser
    res.json({message: `${newUser} has been successfully created`});
})


// PUT - update user /users/:id
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    res.json({message: `User ID: ${userId} updated`});
});

// DELETE /users/:id
router.delete('/:id', (req,res) => {
    const userId = parseInt(req.params.id);
    res.json({message: `User ID: ${userId} has been deleted`});
});

module.exports = router;