import UserType from '../TypeDefs/UserType.js';
import ProjectType from '../TypeDefs/ProjectType.js';
import { users, projects } from '../../sampleData.js';
import { GraphQLObjectType, GraphQLID, GraphQLList } from 'graphql';

// This is the home of all our query operations. We can query a single user by id or query all users.
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		// Query a single user by id and return the user.
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return users.find((user) => user.id === args.id);
			},
		},
		// Query all users in the database and return them as a list of users.
		users: {
			type: new GraphQLList(UserType),
			resolve(parent, args) {
				// code to get data from db / other source
				return users;
			},
		},
		// Query a single project by id and return the project.
		project: {
			type: ProjectType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return projects.find((project) => project.id === args.id);
			},
		},
		// Query all projects in the database and return them as a list of projects.
		projects: {
			type: new GraphQLList(ProjectType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return projects;
			},
		},
	},
});

export default RootQuery;
