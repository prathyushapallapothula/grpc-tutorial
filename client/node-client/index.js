
const { ApolloServer, gql } = require('apollo-server');
const { getTodo } = require('./services');

// import { ApolloServer, gql } from 'apollo-server'
// import { getTodo } from './services/index.js'

const typeDefs = gql`
type Todo {
    id: Int
    title: String
    description: String
}

type Query {
    Todo(id: ID): Todo
}
`

const resolvers = {
    Query: {
        Todo(root, args, ctx) {
          return getTodo(args.id)
        }
    },
};

const task = {
  id: 123,
  title: 'go',
  description: 'asdf'
}


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});