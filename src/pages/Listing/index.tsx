import Pagination from 'components/Pagination';
import MovieScore from 'components/MovieScore';
import MovieCard from 'components/MovieCard';
import './styles.css';

const Listing : React.FC = () => {
	return (
		<>
			<Pagination />
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
						<MovieCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default Listing;