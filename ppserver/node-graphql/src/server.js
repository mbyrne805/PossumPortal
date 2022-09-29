import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/schema.js';
import TrashResults from './dataSources/trashResults.js';
import { TrashResult as TrashResultModel } from './models/trashResult.js';

const uri = process.env.MONGODB_URI;
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

main()
  .then(console.log('db conn'))
  .catch(error => console.error(error));

const dataSources = () => ({
  trashResults: new TrashResults(TrashResultModel),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`server at ${url}`);
});