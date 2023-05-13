import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
} from 'graphql';
import { User, Ticket } from '../models/index.js';

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
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
		createdBy: {
			type: UserType,
			resolve: async (parent) => {
				try {
					const ticket = await Ticket.findById(parent._id).populate(
						'createdBy'
					);
					return ticket.createdBy;
				} catch (err) {
					throw new Error(err);
				}
			},
		},
	}),
});

// This is the type definition for the User type.
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
		role: { type: GraphQLString },
		tickets: {
			type: new GraphQLList(TicketType),
			resolve: async (parent) => {
				try {
					const user = await User.findById(parent.id).populate('tickets');
					return user.tickets;
				} catch (err) {
					throw new Error(err);
				}
			},
		},
	}),
});

export { UserType, BusinessType, UnitType, SystemType, TicketType };
