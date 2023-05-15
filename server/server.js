import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/index.js';
import connectDB from './config/db.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
	res.sendFile(join(__dirname, '../client/build/index.html'));
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(port, () =>
	console.log(`Server running on port ${port}`.green.underline.bold)
);
``;
