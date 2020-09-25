const mongoose = require("mongoose")
const { schema } = require('./project.model')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profileImg: {
        type: String,
        required: true,
        default: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    headline: {
        type: String,
        trim: true,
        default: 'Headline'
    },
    experience: {
        type: [String],
        enum: ['Javascript', 'React', 'Node', 'FrontEnd', 'BackEnd', 'Fullstack']
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
        linkedin: {
            type: String,
            trim: true
        }
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User