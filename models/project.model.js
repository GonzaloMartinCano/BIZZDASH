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
        required: true,
        default: 'https://res.cloudinary.com/dfhcho5xi/image/upload/v1600766091/gi46eplb2c4f6yv8ojao.png'
    },
    img : {
        type: 'String',
        default: 'https://res.cloudinary.com/dfhcho5xi/image/upload/v1600766091/gi46eplb2c4f6yv8ojao.png'
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