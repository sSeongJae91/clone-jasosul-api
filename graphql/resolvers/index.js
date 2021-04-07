const userResolvers = require('./users');
const postResolvers = require('./post');
const jobResolvers = require('./job');
const chatResolvers = require('./chat');

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...postResolvers.Query,
        ...jobResolvers.Query,
        ...chatResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...jobResolvers.Mutation,
        ...chatResolvers.Mutation
    }
}