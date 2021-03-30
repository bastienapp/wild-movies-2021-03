import './MovieItem.css';

function MovieItem(props) {
  const { favourite, title, poster, description } = props;

  return (
    <div className='MovieItem'>
      <h3 className={favourite ? 'favourite' : ''}>
        {title} <span>{favourite ? '★' : '☆'}</span>
      </h3>
      <img src={poster} alt={`Poster ${title}`} />
      <p>{description}</p>
    </div>
  );
}

export default MovieItem;
