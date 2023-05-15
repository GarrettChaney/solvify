import mongoose from 'mongoose';

// Define the Ticket model with mongoose.
const TicketSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
		required: 'description is required',
	},
	status: {
		type: String,
		enum: ['Open', 'In Progress', 'Closed'],
		default: 'Open',
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

export default mongoose.model('Ticket', TicketSchema);
