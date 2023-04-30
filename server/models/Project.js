import mongoose from 'mongoose';

// Define the User model
const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Name is required',
	},
	description: {
		type: String,
		trim: true,
		required: 'Description is required',
	},
	status: {
		type: String,
		trim: true,
		required: 'Status is required',
		enum: ['Active', 'Inactive', 'Completed'],
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

export default ProjectSchema;
