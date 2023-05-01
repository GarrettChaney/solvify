import mongoose from 'mongoose';

// Define the Unit model with mongoose.
const UnitSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		// unique: 'Name already exists',
		// required: 'Name is required',
	},
	unitLead: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
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

export default mongoose.model('Unit', UnitSchema);
