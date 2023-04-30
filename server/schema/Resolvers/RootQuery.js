import { UserType, ProjectType } from '../TypeDefs/typeDefs.js';
import { User, Project } from '../../models/index.js';
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
				return User.findById(args.id);
			},
		},
		// Query all users in the database and return them as a list of users.
		users: {
			type: new GraphQLList(UserType),
			resolve(parent, args) {
				// code to get data from db / other source
				return User.find();
			},
		},
		// Query a single project by id and return the project.
		project: {
			type: ProjectType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return Project.findById(args.id);
			},
		},
		// Query all projects in the database and return them as a list of projects.
		projects: {
			type: new GraphQLList(ProjectType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return Project.find();
			},
		},
	},
});

export default RootQuery;
