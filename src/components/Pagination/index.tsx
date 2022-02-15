import { ReactComponent as Arrow } from 'assets/arrow.svg'
import './styles.css';

const Pagination: React.FC = () => {

	return (
		<>
			<div className="wsmovie-pagination-container">
				<div className="wsmovie-pagination-box">
					<button className="wsmovie-pagination-button" disabled={true} >
						<Arrow />
					</button>
					<p>{`${1} de ${3}`}</p>
					<button className="wsmovie-pagination-button" disabled={false} >
						<Arrow className="wsmovie-flip-horizontal" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Pagination;
