import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';
import { User, Ticket } from '../../models/index.js';
import { TicketType } from '../typeDefs.js';

const ticketMutations = {
	//! Create a new ticket
	createTicket: {
		type: TicketType,
		args: {
			title: { type: new GraphQLNonNull(GraphQLString) },
			description: { type: new GraphQLNonNull(GraphQLString) },
			status: { type: GraphQLString },
			createdBy: { type: new GraphQLNonNull(GraphQLID) },
		},
		resolve: async (parent, args) => {
			try {
				const user = await User.findById(args.createdBy);
				if (!user) {
					throw new Error('User not found');
				}

				const ticket = new Ticket({
					title: args.title,
					description: args.description,
					status: args.status,
					createdBy: user._id,
				});

				const createdTicket = await ticket.save();

				// Update the user's reference to the new ticket
				user.tickets.push(createdTicket._id);
				await user.save();

				return createdTicket;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	//! Delete a ticket
	deleteTicket: {
		type: TicketType,
		args: {
			id: { type: new GraphQLNonNull(GraphQLID) },
		},
		resolve: async (parent, args) => {
			try {
				const ticket = await Ticket.findById(args.id);
				if (!ticket) {
					throw new Error('Ticket not found');
				}

				return Ticket.findByIdAndDelete(args.id);
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	//! Update a ticket
	updateTicket: {
		type: TicketType,
		args: {
			id: { type: new GraphQLNonNull(GraphQLID) },
			status: { type: GraphQLString },
		},
		resolve: async (parent, args) => {
			try {
				const ticket = await Ticket.findById(args.id);
				if (!ticket) {
					throw new Error('Ticket not found');
				}
				ticket.status = args.status;
				await ticket.save();
				return ticket;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};

export default ticketMutations;
