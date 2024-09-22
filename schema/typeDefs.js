const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int
        name: String
        age: Int
        address: String
        status: Boolean
    }

    type Query {
        users: [User]
    }

    type Mutation {
        updateUser(id: Int!, name: String!, age: Int!, address: String!, status: Boolean!): User
    }
`; 

module.exports = { typeDefs };