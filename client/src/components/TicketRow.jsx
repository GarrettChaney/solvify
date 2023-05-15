import { useMutation } from '@apollo/client';
import { DELETE_TICKET } from '../graphql/mutations/ticketMutations';
import { FaTrash } from 'react-icons/fa';

export default function TicketRow({ ticket }) {
	const [deleteTicket] = useMutation(DELETE_TICKET, {
		variables: { id: ticket.id },
		update(cache, { data: { deleteTicket } }) {
			cache.modify({
				fields: {
					tickets(existingTickets = [], { readField }) {
						return existingTickets.filter(
							(ticketRef) => deleteTicket.id !== readField('id', ticketRef)
						);
					},
				},
			});
		},
	});

	const createdBy = ticket.createdBy.name || 'Anonymous';
	return (
		<tr>
			<td>{ticket.title}</td>
			<td>{ticket.description}</td>
			<td>{ticket.status}</td>
			<td>{createdBy}</td>
			<td>
				<button className="btn btn-danger btn-sm" onClick={deleteTicket}>
					<FaTrash />
				</button>
			</td>
		</tr>
	);
}
