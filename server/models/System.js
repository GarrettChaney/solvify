import mongoose from 'mongoose';

// Define the System model with mongoose.
const SystemSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		// unique: 'Name already exists',
		// required: 'Name is required',
	},
	systemLead: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	business: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Business',
	},
	businessUnit: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Unit',
	},
	tickets: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Ticket',
		},
	],
	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

export default mongoose.model('System', SystemSchema);
