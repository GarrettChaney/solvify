import { useQuery } from '@apollo/client';
import { GET_TICKETS } from '../graphql/queries/ticketQueries';
import TicketRow from './TicketRow.jsx';
import Spinner from './Spinner.jsx';

export default function Tickets() {
	const { loading, error, data } = useQuery(GET_TICKETS);

	if (loading) return <Spinner />;
	if (error) return <div>Error!</div>;

	return (
		<>
			{!loading && !error && (
				<table className="table table-hover mt-3">
					<thead>
						<tr>
							<th>Ticket Title</th>
							<th>Ticket Description</th>
							<th>Ticket Status</th>
							<th>Created By</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data.tickets.map((ticket) => (
							<TicketRow key={ticket.id} ticket={ticket} />
						))}
					</tbody>
				</table>
			)}
		</>
	);
}
