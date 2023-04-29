import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { config } from 'dotenv';
import schema from './schema/index.js';

config();
const port = process.env.PORT || 5000;
const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(port, () => console.log(`Server running on port ${port}`));
