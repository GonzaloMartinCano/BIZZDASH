const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

// const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'Desautorizado, incia sesión para continuar' })

let navbar = 'navbarloggout'

const checkLoggedIn = (req, res, next) => {


    if (req.isAuthenticated() && req.user.username === req.params.username) {

        const userRegistered = true
        const looggin = true
        res.render('profile', { user: req.user, userRegistered})

    } else if (req.isAuthenticated()) {

        navbar = 'navbarloggin'
        next()

    } else {    
        navbar = 'navbarloggout'
        next()

    }

}


// const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.render('auth/login', { message: 'Desautorizado, no tienes permisos para ver eso.' })

// const checkRole = rolesToCheck => {
//     return (req, res, next) => {
//         if (req.isAuthenticated() && rolesToCheck.includes(req.user.role)) {
//             next()
//         }
//         else {
//             res.render('auth/login', { message: 'Desautorizado, no tienes permisos para ver eso.' })
//         }
//     }
// }


router.get('/dashboard/', checkLoggedIn, (req, res, next) => res.render('profile/dashboard'))

router.get('/:username', checkLoggedIn, (req, res, next) => {

    const username = req.params.username

    User
        .findOne({ username })                              // Retorna un objeto
        .then(user => {
            if (user)
                res.render('profile', { user })
            else
                res.render('index', { message: 'Usuario no encontrado, pruebe con otro nombre.' })
        })
        .catch(err => next(err))


})


module.exports = router