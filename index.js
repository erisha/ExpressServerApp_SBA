const express = require('express');

const app = express();
const port = 3000;

// middleware

// app.use(morgan('dev'))






app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})