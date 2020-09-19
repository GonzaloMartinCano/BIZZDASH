const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

// const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'Desautorizado, incia sesión para continuar' })

const checkLoggedIn = (req, res, next) => {


    if (req.isAuthenticated() && req.user.username === req.params.username) {

        const userRegistered = true
        res.render('profile', { user: req.user, userRegistered })

    } else {

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


router.get('/setting/profile', checkLoggedIn, (req, res, next) => {

    const userRegistered = true

    //res.render('profile', { user: req.user, userRegistered })

    const { id, username } = req.user

    User
        .findById(id)
        .then(() => res.redirect(`/profile/${username}`))
        .catch(err => next(err))

})

router.get('/:username', checkLoggedIn, (req, res, next) => {

    const user = req.params

    console.log(user)

    res.render('profile', { user })


    // User
    //     .findOne({ username })                              // Retorna un objeto
    //     .then(userData => res.render('profile', userData))
    //     .catch(err => next(err))

})


// Idea de nombre BIZDASH (biz es una abreviatura de Business en ingles)


module.exports = router