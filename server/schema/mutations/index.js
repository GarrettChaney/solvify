import { GraphQLObjectType } from 'graphql';
import userMutations from './userMutations.js';
import ticketMutations from './ticketMutations.js';

// This is the root mutation for the GraphQL API.
const RootMutation = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		...userMutations,
		...ticketMutations,
	},
});

export default RootMutation;
