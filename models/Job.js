const {model, Schema} = require('mongoose');

const jobSchema = new Schema({
    company: String,
    body: String,
    createdAt: String,
    startedAt: String,
    endAt: String
});

module.exports = model('Job', jobSchema);