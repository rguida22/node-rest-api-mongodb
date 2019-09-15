const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser'); 

const  app = express();
const PORT = '3000';

// MIDDLEWARES
// app.use('/posts', () => {
//     console.log('this is post middleware');
// });
app.use(bodyParser.json());

// import Routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');

// routes middleware 
app.use('/posts', postRoute);
app.use('/user', userRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('this is the home route');    
});

// CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true}, 
    () => console.log('connected to db')
);


// express
app.listen(PORT);

