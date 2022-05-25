const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const { resolvers, typeDefs } = require('./schemas')
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const db = require('./config/connection');
const controllers = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(uploadRoute)

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', async () => {

  await server.start()
  server.applyMiddleware({ app })
  
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`GraphQL server available at http://localhost:${PORT}${server.graphqlPath}`)
  });
});
