const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/api', (req, res, next) => {

    res.render('api')

    // User
    //     .find()
    //     .then(response => res.json(response))
    //     .catch(err => next(err))
})

module.exports = router