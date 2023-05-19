import { CircularProgress } from '@mui/material';
import { MovieCard } from 'components/MovieCard';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopRated } from 'services';

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getTopRatedMovies = async () => {
    await getTopRated()
    .then((res) => {
      if (res && res.data) {
        // console.log(res.data, 'res');
        setTopRatedMovies(res.data.results);
      }
    })
    .catch((err) => {
      console.log(err, 'err');
    });
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => getTopRatedMovies(), 1000);
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      {!loading ? (
        topRatedMovies.map((movie) => (
          <Link to={`/about-movie/${movie.id}`}>
            <MovieCard
              key={movie.id}
              path={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
            />
          </Link>
        ))) : (<CircularProgress />)}
    </div>
  )
}

export default TopRated