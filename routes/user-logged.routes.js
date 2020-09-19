const express = require('express')
const router = express.Router()

const checkLoggedIn = (req, res, next) => {

    const userRegistered = true
    if (req.isAuthenticated()) {
        //console.log("Entro---------------------------------", req.user.username)
        // console.log("Entro---------------------------------", req.params.username)
        if(req.user.username === req.params.username)
            res.render('profile', { user: req.user, userRegistered })
    }
    else 
       next()
    
       // res.render('auth/login', { message: 'Desautorizado, inicia sesión para continuar' })
}

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


router.get('/:username', checkLoggedIn, (req, res, next) => { 
    // const user = req.user
    // const userRegistered = true
    
    res.render('profile', req.query)
    // res.render('profile', { user: req.user })
})

// router.get('/username', (req, res) => res.render('profile', req.query))


module.exports = router