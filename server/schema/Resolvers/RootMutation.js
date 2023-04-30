import { UserType, ProjectType } from '../TypeDefs/typeDefs.js';
import { User, Project } from '../../models/index.js';
import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const RootMutation = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		// Mutation to add a user.
		addUser: {
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
		// Mutation to delete a user.
		deleteUser: {
			type: UserType,
			args: {
				id: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				return User.findByIdAndRemove(args.id);
			},
		},
		// Mutation to add a project.
	},
});

export default RootMutation;
