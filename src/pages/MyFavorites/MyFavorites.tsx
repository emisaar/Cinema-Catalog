import { MovieCard } from 'components/MovieCard';
import React from 'react';
import httpInstance from 'services/httpInstance';
import { buildUrl } from 'utils/api';
import { CatalogContainer, GoHomeLink, NoMovieMessage, PageContainer, PageHeader } from './styles';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

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
    setTimeout(() => getUserFavorites(), 1000);
  }, []);

  return (
    <PageContainer>
      <PageHeader>My Favorites</PageHeader>
      {movies.length === 0 && !loading ? (
        <NoMovieMessage>
          You have no favorites on your list.
          <br />
          <GoHomeLink to={'/'}>Go back to home</GoHomeLink>
        </NoMovieMessage>
      ) : (
        <CatalogContainer>
          {!loading ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                path={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                genreId={movie.genre_ids && movie.genre_ids.length > 0 ? movie.genre_ids[0] : null}
              />
            ))) : (<CircularProgress />)}
        </CatalogContainer>
      )}
    </PageContainer>
  );
};

export default MyFavorites;
