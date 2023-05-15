import AddTicketModal from '../components/AddTicketModal';
import Tickets from '../components/Tickets';

export default function Home() {
	return (
		<>
			<div className="d-flex gap-3 mb-4">
				<AddTicketModal />
			</div>
			<Tickets />
		</>
	);
}
