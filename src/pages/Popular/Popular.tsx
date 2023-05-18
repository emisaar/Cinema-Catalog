import React, { useEffect, useState } from 'react';
import { getPopular } from 'services';
import { MovieCard } from 'components/MovieCard';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
// import { buildUrl } from 'utils/api';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getPopularMovies = async () => {
    // const api = buildUrl('popular');
    await getPopular()
      .then((res) => {
        if (res && res.data) {
          // console.log(res.data, 'res');
          setPopularMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => getPopularMovies(), 1000);
  }, []);

  return (
    <div>
      {!loading ? (
        popularMovies.map((movie) => (
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

export default Popular