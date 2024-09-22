const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

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
`; 

const users = [
    {
        id: 1,
        name: "Helen Adams",
        age: 24,
        address: "123 Main St",
        status: false
    },
    {
        id: 2,
        name: "Phil Adams",
        age: 29,
        address: "456 Elm St",
        status: false
    }
];

const resolvers = {
    Query: {
        users: () => users
    }
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, introspection: true,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

const app = express();
server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port: process.env.PORT || 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
});
app.get("/", (req, res) => {
    res.send("Welcome to the GraphQL API");
});