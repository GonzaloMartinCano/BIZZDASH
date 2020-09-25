const express = require('express')
const router = express.Router()

const cdnUploader = require('../configs/cloudinary.img.config')

const User = require('../models/user.model')


// Local files form upoload


router.post('/edituser', cdnUploader.single('imageInput'), (req, res) => {

    const { name, description, headline } = req.body

    const links = {
        gitHub: req.body.gitHub,
        linkedin: req.body.linkedin
    }
    
    req.user.experience = []
    let newexperiences = []
    let experiencesdata = [req.body.javascript, req.body.react, req.body.node, req.body.frontend, req.body.backend, req.body.fullstack]

    let x = 0
    while (experiencesdata.length > x) {
        if (experiencesdata[x])
            newexperiences.push(experiencesdata[x])
        x++
    }

    let profileImg = `${req.user.profileImg}`
    if (req.file)
        profileImg = req.file.path
    
    User.findByIdAndUpdate( req.user.id, {name, description, links, profileImg, headline, experience: newexperiences})
        .then(() => res.redirect(`/${req.user.username}`))
        .catch(err => console.log('Hubo un error:', err))
})


module.exports = router