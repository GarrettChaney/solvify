import { UserType, ProjectType } from '../TypeDefs/typeDefs.js';
import { User, Project } from '../../models/index.js';
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull,
	GraphQLEnumType,
} from 'graphql';

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
		addProject: {
			type: ProjectType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				description: { type: GraphQLNonNull(GraphQLString) },
				status: {
					// This is an enum type. It can only be one of the values specified in the enum. In this case, it can only be one of Active, Inactive, or Completed.
					type: new GraphQLEnumType({
						name: 'ProjectStatus',
						values: {
							active: { value: 'Active' },
							inactive: { value: 'Inactive' },
							completed: { value: 'Completed' },
						},
					}),
					// This is the default value if the user does not specify a value for the status.
					defaultValue: 'Inactive',
				},
				userId: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				const project = new Project({
					name: args.name,
					description: args.description,
					status: args.status,
					userId: args.userId,
				});
				return project.save();
			},
		},
		// Mutation to delete a project.
		deleteProject: {
			type: ProjectType,
			args: {
				id: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				return Project.findByIdAndRemove(args.id);
			},
		},
		// Mutation to update a project.
		updateProject: {
			type: ProjectType,
			args: {
				id: { type: GraphQLNonNull(GraphQLString) },
				name: { type: GraphQLString },
				description: { type: GraphQLString },
				status: {
					type: new GraphQLEnumType({
						name: 'ProjectStatusUpdate',
						values: {
							active: { value: 'Active' },
							inactive: { value: 'Inactive' },
							completed: { value: 'Completed' },
						},
					}),
				},
			},
			resolve(parent, args) {
				return Project.findByIdAndUpdate(
					args.id,
					{
						name: args.name,
						description: args.description,
						status: args.status,
					},
					{ new: true }
				);
			},
		},
	},
});

export default RootMutation;
