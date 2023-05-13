import { GraphQLList, GraphQLString } from 'graphql';
import { Ticket } from '../../models/index.js';
import { TicketType } from '../typeDefs.js';

const ticketQueries = {
	tickets: {
		type: new GraphQLList(TicketType),
		resolve: async () => {
			try {
				const tickets = await Ticket.find();
				return tickets;
			} catch (err) {
				console.log(err);
			}
		},
	},
	ticket: {
		type: TicketType,
		args: {
			id: { type: GraphQLString },
		},
		resolve: async (parent, args) => {
			try {
				const ticket = await Ticket.findById(args.id);
				return ticket;
			} catch (err) {
				console.log(err);
			}
		},
	},
};

export default ticketQueries;
