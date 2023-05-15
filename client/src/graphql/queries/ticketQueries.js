import { gql } from '@apollo/client';

const GET_TICKETS = gql`
	query GetTickets {
		tickets {
			id
			title
			description
			status
			createdBy {
				name
			}
		}
	}
`;

export { GET_TICKETS };
