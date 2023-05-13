import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';
import { User, Ticket } from '../../models/index.js';
import { TicketType } from '../typeDefs.js';

const ticketMutations = {
	createTicket: {
		type: TicketType,
		args: {
			title: { type: new GraphQLNonNull(GraphQLString) },
			description: { type: new GraphQLNonNull(GraphQLString) },
			status: { type: new GraphQLNonNull(GraphQLString) },
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
};

export default ticketMutations;
