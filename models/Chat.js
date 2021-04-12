const {model, Schema} = require('mongoose');

const chatSchema = new Schema({
    body: String,
    username: String,
    createdAt: Date,
    company: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Chat', chatSchema);