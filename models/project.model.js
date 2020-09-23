const mongoose = require('mongoose');
const { schema } = require('./user.model')
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
        }
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})


const Project = mongoose.model('Project', projectsSchema)

module.exports = Project