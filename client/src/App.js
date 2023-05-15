import Header from './components/Header';
import AddTicketModal from './components/AddTicketModal';
import Tickets from './components/Tickets';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<div className="container">
					<AddTicketModal />
					<Tickets />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
