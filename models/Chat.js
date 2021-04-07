const {model, Schema} = require('mongoose');

const chatSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    company: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Chat', chatSchema);