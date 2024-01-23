const express = require('express');
const morgan = require('morgan')
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const app = express();
const port = 3000;

// middleware
// morgan - request logging
 app.use(morgan('dev')); 

 app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
 });

 

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);








app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})