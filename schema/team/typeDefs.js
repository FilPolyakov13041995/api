const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Team {
        id: ID!
        name: String
        defaultColor: String
        leader: String
    }

    input TeamMutationInput {
        name: String!
        defaultColor: String
        leader: String
    }

    type Query {
        teams: [Team]
    }

    type Mutation {
        createTeam(input: TeamMutationInput!): Team
        updateTeam(id: ID!, input: TeamMutationInput!): Team
        deleteTeam(id: ID!): Team
    }
`; 

module.exports = { typeDefs };