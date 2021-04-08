const {gql} = require('apollo-server');

module.exports = gql`
    scalar Date

    type Post {
        id: ID!
        body: String!
    }
    type Chat {
        id: ID!
        body: String!
        username: String!
        createdAt: Date!
        company: String!
    }
    type Job {
        id: ID!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: Date!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        findMyPost(id: ID!): User!
        getUserInfo(id: ID!): User!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        posting(body: String!): Post!
    }
`;