import { MovieCard } from 'components/MovieCard';
import React from 'react';
import { Link } from 'react-router-dom';
import httpInstance from 'services/httpInstance';
import { buildUrl } from 'utils/api';

const MyFavorites = () => {
  const [movies, setMovies] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const localFavs = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];

    const getUserFavorites = async () => {
      const newMovies = await Promise.all(
        localFavs.map(async (favId: string) => {
          const response = await httpInstance.get(buildUrl(favId));
          return response.data;
        })
      );
      setMovies(newMovies);
      setLoading(false);
    };

    setLoading(true);
    getUserFavorites();
  }, []);

  return (
    <div>
      <h1>My Favorites</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <Link to={`/about-movie/${movie.id}`} key={movie.id}>
              <MovieCard
                path={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                genreId={movie.genre_ids && movie.genre_ids.length > 0 ? movie.genre_ids[0] : null}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
