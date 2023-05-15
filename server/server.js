import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/index.js';
import connectDB from './config/db.js';
import path from 'path';
import colors from 'colors';

const port = process.env.PORT || 5000;
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

const __dirname = path.dirname(new URL(import.meta.url).pathname);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
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
