import mongoose from 'mongoose';

// Define the Business model with mongoose.
const BusinessSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		// unique: 'Name already exists',
		// required: 'Name is required',
	},
	description: {
		type: String,
		trim: true,
	},
	admin: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	businessUnits: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Unit',
		},
	],
	systems: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'System',
		},
	],
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

export default mongoose.model('Business', BusinessSchema);
