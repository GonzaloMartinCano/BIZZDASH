const express = require('express')
const router = express.Router()

const cdnUploader = require('../configs/cloudinary.video.config')

const User = require('../models/user.model')
const Project = require('../models/project.model')
const { find } = require('../models/project.model')


router.post('/createproject', cdnUploader.single('videoInput'), (req, res) => {
    
    const userRegistered = true
    const { name, description, github, web } = req.body

    const links = {
        gitHub: github
    }

    let video = `${req.user.video}`
    if (req.file) 
        video =  req.file.path
     
    Project.create({name, description, video, links})
        .then((project) => {

            User.findById(req.user)
                .then((user) => {
                    let newProjects = user.projects
                    let newId = project.id
                    newProjects.push(newId)
                    User.findByIdAndUpdate(req.user, { projects: newProjects })
                        .then(() =>  res.redirect(`/${req.user.username}`))
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        }) 
        .catch(err => console.log('Hubo un error:', err))
})


router.post('/updateproject/:id', cdnUploader.single('videoInput'), (req, res) => {

    const { name, description, github } = req.body
    const links = {
        gitHub: github
    }
    let videotoupdate = ''
    if (req.file)
        videotoupdate = req.file.path
    else
        videotoupdate = req.body.nameInput
    Project.findByIdAndUpdate(req.params.id, { name, description, video: videotoupdate, links})
        .then(() => res.redirect(`/${req.user.username}`))
        .catch(err => console.log('Hubo un error:', err))
})

router.post('/deleteproject/:id', cdnUploader.single('videoInput'), (req, res) => {

   
    Project.findByIdAndRemove( req.params.id)
    .then(() => res.redirect(`/${req.user.username}`))
    .catch(err => console.log('Hubo un error:', err))
})




module.exports = router

