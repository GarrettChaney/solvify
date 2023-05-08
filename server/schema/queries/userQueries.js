import { GraphQLList, GraphQLString } from 'graphql';
import { User } from '../../models/index.js';
import { UserType } from '../typeDefs.js';

const userQueries = {
	user: {
		type: UserType,
		args: { id: { type: GraphQLString } },
		resolve: async (parent, args) => {
			return await User.findById(args.id);
		},
	},
	// This query will return all users in the database.
	users: {
		type: new GraphQLList(UserType),
		resolve: async () => {
			return await User.find({});
		},
	},
};

export default userQueries;
