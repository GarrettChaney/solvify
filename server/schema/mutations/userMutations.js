import { GraphQLString, GraphQLNonNull } from 'graphql';
import { User } from '../../models/index.js';
import UserType from '../typeDefs.js';

//  This is the variable where all our user mutations are stored.
const userMutations = {
	//! Create a new user.
	createUser: {
		type: UserType,
		args: {
			name: { type: GraphQLNonNull(GraphQLString) },
			email: { type: GraphQLNonNull(GraphQLString) },
			phone: { type: GraphQLNonNull(GraphQLString) },
		},
		resolve(parent, args) {
			const user = new User({
				name: args.name,
				email: args.email,
				phone: args.phone,
			});
			return user.save();
		},
	},
	//! Delete a user by their ID.
	deleteUser: {
		type: UserType,
		args: {
			id: { type: GraphQLNonNull(GraphQLString) },
		},
		resolve(parent, args) {
			return User.findByIdAndRemove(args.id);
		},
	},
};

export default userMutations;
