import { useState } from 'react';
import './MovieItem.css';

function MovieItem(props) {
  const { title, poster, description, favourite } = props;

  const [isFavourite, setIsFavourite] = useState(favourite);

  const handleClickFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className='MovieItem'>
      <h3>
        {title} <span>{isFavourite ? '★' : '☆'}</span>
      </h3>
      <button type='button' onClick={handleClickFavourite}>
        {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      </button>
      <img src={poster} alt={`Poster ${title}`} />
      <p>{description}</p>
    </div>
  );
}

export default MovieItem;
