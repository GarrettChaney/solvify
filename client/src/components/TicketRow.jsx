import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import {
	DELETE_TICKET,
	UPDATE_TICKET,
} from '../graphql/mutations/ticketMutations';
import { FaTrash, FaCheck } from 'react-icons/fa';

export default function TicketRow({ ticket }) {
	const [status, setStatus] = useState(ticket.status || 'Choose Status');
	const [updateSuccess, setUpdateSuccess] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

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

	const [updateTicket] = useMutation(UPDATE_TICKET, {
		variables: {
			id: ticket.id,
			status,
		},
		update(cache, { data: { updateTicket } }) {
			cache.modify({
				fields: {
					tickets(existingTickets = [], { readField }) {
						const newTicketRef = cache.writeFragment({
							data: updateTicket,
							fragment: gql`
								fragment NewTicket on Ticket {
									id
									title
									description
									status
									createdBy {
										id
										name
									}
								}
							`,
						});
						return existingTickets.map((ticketRef) => {
							if (updateTicket.id === readField('id', ticketRef)) {
								return newTicketRef;
							}
							return ticketRef;
						});
					},
				},
			});
			setUpdateSuccess(true); // Add this line
			setShowMessage(true); // Add this line
			// Start the timer to hide the message after 5 seconds
			setTimeout(() => {
				setUpdateSuccess(false);
				setShowMessage(false);
			}, 5000);
		},
		onError(error) {
			console.error(error);
		},
	});

	const createdBy = ticket.createdBy.name || 'Anonymous';
	return (
		<tr>
			<td>{ticket.title}</td>
			<td>{ticket.description}</td>
			<td>
				<div className="dropdown">
					<label className="form-label">{status}</label>
					<button
						className="btn btn-transparent dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{/* {status || 'Choose Status'} */}
					</button>
					<ul className="dropdown-menu">
						<li>
							<button
								className="dropdown-item"
								type="button"
								onClick={() => setStatus('Open')}
							>
								Open
							</button>
						</li>
						<li>
							<button
								className="dropdown-item"
								type="button"
								onClick={() => setStatus('In Progress')}
							>
								In Progress
							</button>
						</li>
						<li>
							<button
								className="dropdown-item"
								type="button"
								onClick={() => setStatus('Closed')}
							>
								Closed
							</button>
						</li>
					</ul>
				</div>
			</td>
			<td>{createdBy}</td>
			<td>
				<div className="btn btn-secondary btn-sm m-1" onClick={updateTicket}>
					<FaCheck />
				</div>
				<button className="btn btn-danger btn-sm" onClick={deleteTicket}>
					<FaTrash />
				</button>
				{updateSuccess && <p className="text-success">Updated.</p>}
			</td>
		</tr>
	);
}
