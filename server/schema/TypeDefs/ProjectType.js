import UserType from './UserType.js';
import { users } from '../../sampleData.js';
import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';

const ProjectType = new GraphQLObjectType({
	name: 'Project',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLNonNull(GraphQLString) },
		status: { type: GraphQLNonNull(GraphQLString) },
		manager: {
			type: UserType,
			resolve(parent, args) {
				// code to get data from db / other source
				return users.find((user) => user.id === parent.managerId);
			},
		},
	}),
});

export default ProjectType;
