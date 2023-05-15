import { gql } from '@apollo/client';

const DELETE_TICKET = gql`
	mutation DeleteTicket($id: ID!) {
		deleteTicket(id: $id) {
			id
			title
			description
			status
		}
	}
`;

const CREATE_TICKET = gql`
	mutation CreateTicket(
		$title: String!
		$description: String!
		$status: String!
		$createdBy: ID!
	) {
		createTicket(
			title: $title
			description: $description
			status: $status
			createdBy: $createdBy
		) {
			id
			title
			description
			status
			createdBy {
				id
				name
			}
		}
	}
`;

const UPDATE_TICKET = gql`
	mutation UpdateTicket($id: ID!, $status: String!) {
		updateTicket(id: $id, status: $status) {
			id
			title
			description
			status
			createdBy {
				id
				name
			}
		}
	}
`;

export { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET };
