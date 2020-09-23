const express = require('express')
const router = express.Router()

const cdnUploader = require('./../configs/cloudinary.config')

const User = require('../models/user.model')


// Local files form upoload

router.get('/upload', (req, res) => res.render('upload'))
router.post('/upload', cdnUploader.single('imageInput'), (req, res) => {

    const { name, description} = req.body
    const links = {
        gitHub: req.body.gitHub,
        linkedin: req.body.linkedin
    }

   // let profileImg = req.file.path
    let profileImg = `${req.user.profileImg}`
    if (req.file)
        profileImg = req.file.path
     console.log(profileImg)
    User.findByIdAndUpdate( req.user.id, {name, description, links, profileImg})
        .then(() => res.redirect(`/${req.user.username}`))
        .catch(err => console.log('Hubo un error:', err))
})

router.post('/updateproject', cdnUploader.single('videoInput'), (req, res) => {

    const { name, description } = req.body
    let media = {
        name: req.body.name,
        video: `${req.body.videoInput}`
    }
    if (req.file) {
        media = {
            name: req.body.name,
            video: req.file.path
        }
    }
    console.log("------------------", {name, description, media} )
    User.findByIdAndUpdate( req.user.id, {name, description, media})
    .then(() => res.redirect(`/${req.user.username}`))
    .catch(err => console.log('Hubo un error:', err))
})




module.exports = router