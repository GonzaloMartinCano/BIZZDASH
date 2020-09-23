const express = require('express')
const router = express.Router()

const cdnUploader = require('../configs/cloudinary.video.config')

const User = require('../models/user.model')
const Project = require('../models/project.model')
const { find } = require('../models/project.model')


router.post('/createproject', cdnUploader.single('videoInput'), (req, res) => {
    
    const userRegistered = true
    const { name, description } = req.body
    let video = `${req.user.video}`
    if (req.file) 
        video =  req.file.path
     
    Project.create({name, description, video})
        .then((project) => {

            User.findById(req.user)
                .then((user) => {
                    let newProjects = user.projects
                    let newId = project.id
                    newProjects.push(newId)
                    User.findByIdAndUpdate(req.user, { projects: newProjects })
                        .then(() =>  res.render('profile', { usertorender: req.user, userRegistered}))
                })
                .catch(err => console.log(err))
        }) 
        .catch(err => console.log('Hubo un error:', err))
})


router.post('/updateproject/:id', cdnUploader.single('videoInput'), (req, res) => {

    const { name, description } = req.body

    let video = `${req.user.video}`
    if (req.file) 
        video =  req.file.path
   
    Project.findByIdAndUpdate( req.params.id, {name, description, video})
    .then(() => res.redirect(`/${req.user.username}`))
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router

