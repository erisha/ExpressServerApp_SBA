const express = require('express');
const bodyParser = require ('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
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

 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//error handling
 app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong')
 });

 // Views
 app.set('view engine', 'ejs');
 app.set('views', __dirname + '/views')

// render view w/ form
app.get('/', (req, res) => {
    res.render('addPost');
});

// Routes
let users = [];
let posts = []; 
let comments = [];

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);



app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})