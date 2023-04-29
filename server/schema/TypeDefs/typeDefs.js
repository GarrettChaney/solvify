import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';
import { users } from '../../sampleData.js';

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLID) },
		name: { type: GraphQLNonNull(GraphQLString) },
		email: { type: GraphQLNonNull(GraphQLString) },
	}),
});

const ProjectType = new GraphQLObjectType({
	name: 'Project',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLID) },
		name: { type: GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLNonNull(GraphQLString) },
		status: { type: GraphQLNonNull(GraphQLString) },
		// This is the foreign key that links the project to the user who is the manager of the project.
		manager: {
			type: UserType,
			resolve(parent, args) {
				// code to get data from db / other source
				return users.find((user) => user.id === parent.managerId);
			},
		},
	}),
});

export { UserType, ProjectType };
