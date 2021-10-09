require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { readFileSync } = require('fs');
const { join } = require('path');
const { newtechnique } = require('./lib/resolver');
const dbConnection = require('./BD/connection');

const app = express();
const port = process.env.PORT || 3000;

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), { encoding: 'utf-8' });
//const schema = buildSchema(typeDefs );
const schema = makeExecutableSchema({
    typeDefs,
    resolvers: newtechnique
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: newtechnique,
        graphiql: true
    })
)

app.listen(port, async() => {
    console.log(`serving... at port ${port}`);
    await dbConnection();
});