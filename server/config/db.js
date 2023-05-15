import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			mongoose.connect(process.env.MONGODB_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			})
		);

		console.log(
			`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
