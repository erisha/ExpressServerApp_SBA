const express = require('express');
const morgan = require('morgan')

const app = express();
const port = 3000;

// middleware
// morgan - request logging
 app.use(morgan('dev')); 
 app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
 });










app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})