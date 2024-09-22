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
        createUser(name: String!, age: Int!, address: String!, status: Boolean!): User
        updateUser(id: Int!, name: String, age: Int, address: String, status: Boolean): User
        deleteUser(id: Int!): User
    }
`; 

module.exports = { typeDefs };