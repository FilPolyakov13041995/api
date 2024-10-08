const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: ID!
        name: String
        age: Int
        address: String
        status: Boolean
    }

    input UserMutationInput {
        name: String!
        age: Int
        address: String
        status: Boolean
    }

    input FilterInput {
        name: String
        address: String
    }

    type Query {
        users(input: FilterInput): [User]
    }

    type Mutation {
        createUser(input: UserMutationInput!): User
        updateUser(id: ID!, input: UserMutationInput!): User
        deleteUser(id: ID!): User
    }
`;

module.exports = {typeDefs};