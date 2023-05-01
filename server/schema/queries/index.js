import { GraphQLObjectType } from 'graphql';
import userQueries from './userQueries.js';

// This is the root query for the GraphQL API.
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		//businessQueries,
		//unitQueries,
		//systemQueries,
		//ticketQueries,
		userQueries,
	},
});

export default RootQuery;
