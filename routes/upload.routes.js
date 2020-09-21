const express = require('express')
const router = express.Router()

const cdnUploader = require('./../configs/cloudinary.config')

const User = require('../models/user.model')


// Local files form upoload
router.get('/upload', (req, res) => res.render('upload'))
router.post('/upload', cdnUploader.single('imageInput'), (req, res) => {

    const { nameInput } = req.body
    console.log(req.body)
    User.findOneAndUpdate({username: req.user.username}, {profileImg: req.file.path})
        .then((user) => res.redirect(`/${req.user.username}`))
        .catch(err => console.log('Hubo un error:', err))
})


// profileImg: {
//     type: String,
//     required: true,
//     default: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png'


module.exports = router
