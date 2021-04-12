const {model, Schema} = require('mongoose');

const jobSchema = new Schema({
    company: String,
    body: String,
    createdAt: Date,
    startedAt: String,
    endAt: String
});

module.exports = model('Job', jobSchema);