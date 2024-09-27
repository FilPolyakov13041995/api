const { mergeTypeDefs } = require('@graphql-tools/merge');
const { mergeResolvers } = require('@graphql-tools/merge');
const userSchema = require('./user');
const teamSchema = require('./team');

const typeDefs = mergeTypeDefs([userSchema.typeDefs, teamSchema.typeDefs]);
const resolvers = mergeResolvers([userSchema.resolvers, teamSchema.resolvers]);

module.exports = { typeDefs, resolvers }