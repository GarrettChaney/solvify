import { User, Project } from '../../models/index.js';
import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';

// This is the type definition for the User type.
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLID) },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
});

// This is the type definition for the Project type.
const ProjectType = new GraphQLObjectType({
	name: 'Project',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
		// This is the foreign key that links the project to the user who is the manager of the project.
		manager: {
			type: UserType,
			resolve(parent, args) {
				// code to get data from db / other source
				return User.findById(parent.userId);
			},
		},
	}),
});

export { UserType, ProjectType };
