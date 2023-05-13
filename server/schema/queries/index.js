import { GraphQLObjectType } from 'graphql';
import userQueries from './userQueries.js';
import ticketQueries from './ticketQueries.js';

// This is the root query for the GraphQL API.
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...userQueries,
		...ticketQueries,
	},
});

export default RootQuery;
