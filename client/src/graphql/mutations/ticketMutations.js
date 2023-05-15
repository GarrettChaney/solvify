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

export { DELETE_TICKET };
