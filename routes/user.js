const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the user route');    
});

router.get('/specific', (req, res) => {
    res.send('specific user route');    
});

module.exports = router;

