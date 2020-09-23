const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectsSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    video: {
        type: 'String',
        default: 'https://res.cloudinary.com/dfhcho5xi/video/upload/v1600894829/exjxwyhpomyeni6b0z08.mp4'
    },
    img : {
        type: 'String',
        default: 'https://cdn-images-1.listennotes.com/podcasts/the-official-project-censored-show-project-RNkeS2yQAFK.1400x1400.jpg'
    },
    links: {
        gitHub: {
            type: String,
            trim: true
        },
        web: {
            type: String,
            trim: true
        }
    }
}, {
    timestamps: true
})


const Project = mongoose.model('Project', projectsSchema)

module.exports = Project