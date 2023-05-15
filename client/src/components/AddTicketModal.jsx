import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TICKET } from '../graphql/mutations/ticketMutations';
import { GET_TICKETS } from '../graphql/queries/ticketQueries';

export default function AddTicketModal() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');
	const [createdBy, setCreatedBy] = useState('6458c2613313be74cc153c2e'); // Set a default createdBy value

	const [createTicket] = useMutation(CREATE_TICKET, {
		variables: {
			title,
			description,
			status,
			createdBy,
		},
		update(cache, { data: { createTicket } }) {
			const { tickets } = cache.readQuery({ query: GET_TICKETS });
			cache.writeQuery({
				query: GET_TICKETS,
				data: { tickets: tickets.concat([createTicket]) },
			});
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (title === '' || description === '' || status === '') {
			return alert('Please enter all fields');
		}

		createTicket(title, description, status, createdBy);
		setTitle('');
		setDescription('');
		setStatus('');
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-secondary"
				data-bs-toggle="modal"
				data-bs-target="#addTicketModal"
			>
				Create Ticket
			</button>

			<div
				className="modal fade"
				id="addTicketModal"
				tabIndex="-1"
				aria-labelledby="addTicketModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="addTicketModalLabel">
								Create a ticket...
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form onSubmit={onSubmit}>
								<div className="mb-3">
									<label className="form-label">Ticket Title:</label>
									<input
										type="text"
										id="title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Ticket Description:</label>
									<input
										type="text"
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<div className="dropdown">
										<label className="form-label">Ticket Status:</label>
										<button
											className="btn btn-transparent dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											{status || 'Choose Status'}
										</button>
										<ul className="dropdown-menu">
											<li>
												<button
													className="dropdown-item"
													type="button" // Add this attribute
													onClick={() => setStatus('Open')}
												>
													Open
												</button>
											</li>
											<li>
												<button
													className="dropdown-item"
													type="button" // Add this attribute
													onClick={() => setStatus('In Progress')}
												>
													In Progress
												</button>
											</li>
											<li>
												<button
													className="dropdown-item"
													type="button" // Add this attribute
													onClick={() => setStatus('Closed')}
												>
													Closed
												</button>
											</li>
										</ul>
									</div>
								</div>
								<button
									type="submit"
									data-bs-dismiss="modal"
									className="btn btn-secondary"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
