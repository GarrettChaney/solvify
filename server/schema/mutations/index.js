import { GraphQLObjectType } from 'graphql';
import userMutations from './userMutations.js';

// This is the root mutation for the GraphQL API.
const RootMutation = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		//businessMutations,
		//unitMutations,
		//systemMutations,
		//ticketMutations,
		userMutations,
	},
});

export default RootMutation;
