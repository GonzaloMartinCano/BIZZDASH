const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

const checkLoggedIn = (req, res, next) => {

    if (req.isAuthenticated() && req.user.username === req.params.username) {

        const userRegistered = true
        
        res.render('profile/dashboard', {user: req.user})

    } else {
        next()
    }
}

router.get('/:username/dashboard', checkLoggedIn, (req, res, next) => res.redirect('/'))


module.exports = router