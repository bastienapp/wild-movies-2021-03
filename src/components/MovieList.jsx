import MovieItem from './MovieItem';
import './MovieList.css';
import movies from '../movies';
import { useState } from 'react';

function MovieList() {
  const [search, setSearch] = useState('');
  const [countFavourites, setCountFavourites] = useState(1);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const changeFavouriteCount = (isFavourite) => {
    if (isFavourite) {
      setCountFavourites(countFavourites + 1);
    } else {
      setCountFavourites(countFavourites - 1);
    }
    // setCountFavourites(countFavourites + (isFavourite ? 1 : -1));
  }

  return (
    <div>
      <div>
        All my favourites: {countFavourites}
      </div>
      <label htmlFor='search'>
        <span>Search: </span>
        <input
          id='search'
          type='text'
          placeholder='Movie title'
          onChange={handleSearchChange}
          value={search}
        />
      </label>
      <div className='MovieList'>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((movie) => (
            <MovieItem key={movie.id} {...movie} changeFavouriteCount={changeFavouriteCount} />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
