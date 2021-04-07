const {gql} = require('apollo-server');

module.exports = gql`
    type Post {
        id: ID!
        body: String!
    }
    type Chat {
        id: ID!
        body: String!
        username: String!
        createdAt: String!
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
        createdAt: String!
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