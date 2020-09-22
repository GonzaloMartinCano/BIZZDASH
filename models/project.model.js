const mongoose = require('mongoose');
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
    links: {
        gitHub: {
            type: String,
            trim: true
        },
        web: {
            type: String,
            trim: true
        },
        media: {
            img: {
                type: 'String',
                required: true,
                default: 'https://cdn-images-1.listennotes.com/podcasts/the-official-project-censored-show-project-RNkeS2yQAFK.1400x1400.jpg'
            },
            video: {
                type: 'String'
            },
        },
        tags: {
            type: [String],
            enum: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'React']
        }
    },
}, {
    timestamps: true
})


const Project = mongoose.model('Project', projectsSchema)

module.exports = Project