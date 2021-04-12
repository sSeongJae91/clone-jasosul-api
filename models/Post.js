const {model, Schema} = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'job'
    }
});

module.exports = model('Post', postSchema);