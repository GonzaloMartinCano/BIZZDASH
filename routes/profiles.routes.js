const express = require('express')
const router = express.Router()

const User = require('../models/user.model')
const Project = require('../models/project.model')


const checkLoggedIn = (req, res, next) => {

    if (req.isAuthenticated() && req.user.username === req.params.username) {

        const userRegistered = true
        const username = req.params.username
        User
            .findOne({username})
            .populate('projects')
            .then((usertorender) =>  res.render('profile', { usertorender, userRegistered}))

    } else {    
        next()
    }
}

router.get('/:username', checkLoggedIn, (req, res, next) => {

    const username = req.params.username

    User
        .findOne({ username })
        .populate('projects')
        .then((usertorender) => {
            if (usertorender) {
                res.render('profile', { usertorender})
            }
            else
                res.render('index', { message: 'User not found, try another name.' })
        })

        .catch(err => next(err))


})


module.exports = router