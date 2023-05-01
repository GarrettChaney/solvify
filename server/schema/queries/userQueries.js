import { GraphQLID, GraphQLList } from 'graphql';
import { User } from '../../models/index.js';
import UserType from '../typeDefs.js';

// This is the variable where all our user queries are stored.
const userQueries = {
	//! Query a single user by their ID.
	user: {
		type: UserType,
		args: { id: { type: GraphQLID } },
		resolve(parent, args) {
			// code to get data from our mongdb database
			return User.findById(args.id);
		},
	},
	//! Query all users in the database and return them as a list of users.
	users: {
		type: new GraphQLList(UserType),
		resolve(parent, args) {
			// code to get data from our mongdb database
			return User.find();
		},
	},
};

export default userQueries;
