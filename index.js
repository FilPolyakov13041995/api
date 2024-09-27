const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
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