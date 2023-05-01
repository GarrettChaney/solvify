import mongoose from 'mongoose';

// Define the User model with mongoose.
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Name is required',
	},
	email: {
		type: String,
		trim: true,
		unique: 'Email already exists',
		match: [/.+\@.+\..+/, 'Please fill a valid email address'],
		required: 'Email is required',
	},
	phone: {
		type: String,
		trim: true,
		required: 'Phone number is required',
	},
	role: {
		type: String,
		enum: [
			'Admin',
			'Business Admin',
			'Unit Admin',
			'System Admin',
			'Submitter',
			'User',
		],
		default: 'User',
	},
});

export default mongoose.model('User', UserSchema);
