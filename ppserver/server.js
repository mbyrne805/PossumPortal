import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});