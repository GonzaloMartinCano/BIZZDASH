const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

const checkLoggedIn = (req, res, next) => {

    if (req.isAuthenticated() && req.user.username === req.params.username) {

        const userRegistered = true
        
        res.render('profile', { usertorender: req.user, userRegistered})

    } else {    
        next()
    }
}

router.get('/:username', checkLoggedIn, (req, res, next) => {

    const username = req.params.username

    User
        .findOne({ username })                            
        .then(usertorender => {
            if (usertorender)
                res.render('profile', { usertorender })
            else
                res.render('index', { message: 'Usuario no encontrado, pruebe con otro nombre.' })
        })
        .catch(err => next(err))


})


module.exports = router