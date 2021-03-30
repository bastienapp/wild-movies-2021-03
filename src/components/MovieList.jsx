import MovieItem from './MovieItem';
import './MovieList.css';

function MovieList() {
  const movieAlien = {
    title: 'Alien (1979)',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    description:
      'After a space merchant vessel receives an unknown transmission as a\n distress call, one of the crew is attacked by a mysterious life form and\nthey soon realize that its life cycle has merely begun.',
    favourite: false,
  };
  const movieLeon = {
    title: 'Leon (1994)',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTc3Mzg0NDE0MV5BMl5BanBnXkFtZTgwNzQ1MzgyMjI@._V1_.jpg',
    description:
      "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    favourite: true,
  };
  const ameliePoulain = {
    title: "Le Fabuleux Destin d'Amélie Poulain (2001)",
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    description:
      'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.',
    favourite: false,
  };

  return (
    <div className='MovieList'>
      <MovieItem {...movieAlien} />
      <MovieItem {...movieLeon} />
      <MovieItem {...ameliePoulain} />
    </div>
  );
}

export default MovieList;
