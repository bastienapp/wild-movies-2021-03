import MovieItem from './MovieItem';
import './MovieList.css';
import movies from '../movies';

function MovieList() {
  return (
    <div className='MovieList'>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
