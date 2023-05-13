import mongoose from 'mongoose';

// Define the Ticket model with mongoose.
const TicketSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		// unique: 'title already exists',
		// required: 'title is required',
	},
	description: {
		type: String,
		trim: true,
		required: 'description is required',
	},
	status: {
		type: String,
		trim: true,
		// required: 'status is required',
	},
	// priority: {
	// 	type: String,
	// 	trim: true,
	// },
	// business: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Business',
	// },
	// businessUnit: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Unit',
	// },
	// developer: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User',
	// },
	// system: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'System',
	// },
	// specialist: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User',
	// },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	// comments: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Comment',
	// 	},
	// ],
});

export default mongoose.model('Ticket', TicketSchema);
