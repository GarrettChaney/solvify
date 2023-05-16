import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const defaultURI = 'http://localhost:5000/graphql';

const client = new ApolloClient({
	uri: process.env.GRAPHQL_URI || 'http://localhost:5000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Router>
					<Header />
					<div className="container">
						<Routes>
							<Route path="/" element={<SignIn />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/home" element={<Home />} />
						</Routes>
					</div>
				</Router>
			</ApolloProvider>
		</>
	);
}

export default App;
