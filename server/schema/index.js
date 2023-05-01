import { GraphQLSchema } from 'graphql';
import RootQuery from './queries/index.js';
import RootMutation from './mutations/index.js';

// Export the GraphQL schema for use in the server.
export default new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});
