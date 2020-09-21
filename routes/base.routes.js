const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

router.get('/', (req, res) => res.render('index'))

router.post('/', (req, res) => {

    let username = {}
    if (req.body.username)
        username = { username: req.body.username }
    
    User.find(username)
    //.then((users) => console.log(users))
    .then((users) => res.render('index', {users}))
    .catch((err) => console.log(err))

    
})




module.exports = router