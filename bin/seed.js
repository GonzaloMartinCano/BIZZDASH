const mongoose = require('mongoose')
const User = require('../models/user.model')
const Project = require('../models/project.model')

mongoose.connect(`mongodb+srv://@cluster0.d9afa.mongodb.net/test`, { useUnifiedTopology: true, useNewUrlParser: true })


const projects = {
    name: 'BizDash',
    description: 'Un proyecto alucinante, monóculo y chistera',
    links: {
        gitHub: 'https://github.com/Zalillo18',
        web: 'https://github.com/Zalillo18',
        media: {
            video: 'https://res.cloudinary.com/dfhcho5xi/video/upload/v1600706475/cub3d_d7WbIOLb.compressed_1_ycckni.mp4',
        }
    }
}


Project.create(projects)
    .then((projects) => console.log('Se ha creado el projecto', projects))
    .catch(err => console.log('Ha ocurrido un error creando el usuario'))
