import MovieStars from "components/MovieStars";
import './styles.css';

const MovieScore: React.FC = () => {
	const score = 10;
	const count = 1;
	
	return (
		<>
			<div className="wsmovie-score-container">
				<p className="wsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
				<MovieStars />
				<p className="wsmovie-score-count">{count} avaliações</p>
			</div>
		</>
	);
}

export default MovieScore;