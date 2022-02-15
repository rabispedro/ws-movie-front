import MovieScore from 'components/MovieScore';
import { Link } from 'react-router-dom';
import './styles.css';

const MovieCard: React.FC = () => {
	const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

	return (
		<>
			<div>
				<img className="wsmovie-movie-card-image" src={movie.image} alt={movie.title} />
				<div className="wsmovie-card-bottom-container">
					<h3>{movie.title}</h3>
					<MovieScore />
					<Link to={`/form/${movie.id}`}>
						<div className="btn btn-primary wsmovie-btn">Avaliar</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default MovieCard;
