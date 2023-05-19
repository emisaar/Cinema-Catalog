import { CircularProgress } from '@mui/material';
import { MovieCard } from 'components/MovieCard';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getNowPlaying } from 'services';

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getNowPlayingMovies = async () => {
    await getNowPlaying()
      .then((res) => {
        if (res && res.data) {
          // console.log(res.data, 'res');
          setNowPlayingMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => getNowPlayingMovies(), 1000);
  }, []);

  return (
    <div>
      <h1>Now Playing Movies</h1>
      {!loading ? (
        nowPlayingMovies.map((movie) => (
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

export default NowPlaying