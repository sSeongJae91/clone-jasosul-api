const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    email: String,
    username: String,
    password: String,
    createdAt: Date
});

module.exports = model('User', userSchema);