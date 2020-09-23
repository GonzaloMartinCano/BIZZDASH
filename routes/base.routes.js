const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

router.get('/', (req, res) => res.render('index'))

router.post('/', (req, res) => {

    if (req.body.option === 'name') {
       
        let username = {}
        if (req.body.username)
            username = { username: req.body.username }
        
        User.find(username)
            .then((users) => res.render('index', { users }))
            .catch((err) => console.log(err))
    }
    else
        res.render('index', { message: 'No hay concidenicas con esa selección' })
    
})




module.exports = router