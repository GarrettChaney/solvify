import Header from './components/Header';
import Tickets from './components/Tickets';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<div className="container">
					<Tickets />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
