import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { User } from '../../models/index.js';
import { UserType } from '../typeDefs.js';

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
				role: 'User',
			});
			return user.save();
		},
	},
	//! Update a user by their ID.
	updateUser: {
		type: UserType,
		args: {
			id: { type: GraphQLNonNull(GraphQLString) },
			name: { type: GraphQLNonNull(GraphQLString) },
			email: { type: GraphQLNonNull(GraphQLString) },
			phone: { type: GraphQLNonNull(GraphQLString) },
			role: { type: GraphQLNonNull(GraphQLString) },
			businessName: { type: GraphQLNonNull(GraphQLString) },
		},
		resolve(parent, args) {
			return User.findByIdAndUpdate(
				args.id,
				{
					name: args.name,
					email: args.email,
					phone: args.phone,
				},
				{ new: true }
			);
		},
	},
	//! Delete a user by their ID.
	deleteUser: {
		type: UserType,
		args: {
			id: { type: GraphQLNonNull(GraphQLString) },
		},
		resolve(parent, args) {
			return User.findByIdAndDelete(args.id);
		},
	},
};

export default userMutations;
