import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

// This is the type definition for the User type.
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
});

export default UserType;
