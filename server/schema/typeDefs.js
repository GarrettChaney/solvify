import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

// This is the type definition for the Business type.
const BusinessType = new GraphQLObjectType({
	name: 'Business',
	description: 'A business that uses the system.',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		admin: { type: GraphQLString },
		businessUnits: { type: GraphQLString },
		systems: { type: GraphQLString },
		tickets: { type: GraphQLString },
		users: { type: GraphQLString },
	}),
});

// This is the type definition for the Unit type.
const UnitType = new GraphQLObjectType({
	name: 'Unit',
	description:
		'A business unit that operates as a unique section within the business.',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		unitLead: { type: GraphQLString },
		systems: { type: GraphQLString },
		tickets: { type: GraphQLString },
		users: { type: GraphQLString },
	}),
});

// This is the type definition for the System type.
const SystemType = new GraphQLObjectType({
	name: 'System',
	description: 'A system that is used in a specific business unit.',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		systemLead: { type: GraphQLString },
		business: { type: GraphQLString },
		businessUnit: { type: GraphQLString },
		tickets: { type: GraphQLString },
		users: { type: GraphQLString },
	}),
});

// This is the type definition for the Ticket type.
const TicketType = new GraphQLObjectType({
	name: 'Ticket',
	description: 'A ticket that is used to track issues with a system.',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		createdBy: { type: GraphQLString },
		assignedTo: { type: GraphQLString },
		system: { type: GraphQLString },
	}),
});

// This is the type definition for the User type.
const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A user within the application.',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
		role: { type: GraphQLString },
		business: { type: GraphQLString },
		businessUnit: { type: GraphQLString },
		systems: { type: GraphQLString },
		tickets: { type: GraphQLString },
	}),
});

export default UserType;
