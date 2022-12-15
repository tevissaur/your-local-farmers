import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './schemas';
import path from 'path';
import { db } from './config/connection';

interface MyContext {
  token?: String;
}

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer<MyContext>({
  resolvers,
  typeDefs,
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// app.use(uploadRoute)
// app.use(routes);

db.once('open', async () => {

  await server.start()
  server.applyMiddleware({ app })
  
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`GraphQL server available at http://localhost:${PORT}${server.graphqlPath}`)
  });
});
