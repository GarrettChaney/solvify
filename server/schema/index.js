import { GraphQLSchema } from 'graphql';
import RootQuery from './Resolvers/RootQuery.js';
// import RootMutation from './Resolvers/Mutation.js';

export default new GraphQLSchema({
	query: RootQuery,
	// mutation: RootMutation,
});
