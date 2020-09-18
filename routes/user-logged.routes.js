const express = require('express')
const router = express.Router()

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'Desautorizado, incia sesión para continuar' })
// const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.render('auth/login', { message: 'Desautorizado, no tienes permisos para ver eso.' })

const checkRole = rolesToCheck => {
    return (req, res, next) => {
        if (req.isAuthenticated() && rolesToCheck.includes(req.user.role)) {
            next()
        }
        else {
            res.render('auth/login', { message: 'Desautorizado, no tienes permisos para ver eso.' })
        }
    }
}


router.get('/profile', checkLoggedIn, (req, res, next) => { 
    // const user = req.user
    const userRegistered = true
    

    res.render('profile', { user: req.user, userRegistered })
})

router.get('/profile/?', (req, res) => res.render('profile', req.query))


module.exports = router