import { useState } from 'react';
import './MovieItem.css';

function MovieItem(props) {
  const { title, poster, description, favourite, changeFavouriteCount } = props;

  const [isFavourite, setIsFavourite] = useState(favourite);

  const handleClickFavourite = () => {
    let isFavouriteChanged = !isFavourite;
    setIsFavourite(isFavouriteChanged);
    // prévenir le parent que j'ai ajouté ou un retiré un favori
    changeFavouriteCount(isFavouriteChanged);
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
