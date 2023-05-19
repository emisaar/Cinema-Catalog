import { MovieCard } from 'components/MovieCard';
import React from 'react';
import { Link } from 'react-router-dom';
import httpInstance from 'services/httpInstance';
import { buildUrl } from 'utils/api';
import { CatalogContainer, PageContainer, PageHeader } from './styles';
import { CircularProgress } from '@mui/material';

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
    <PageContainer>
      <PageHeader>My Favorites</PageHeader>
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
    </PageContainer>
  );
};

export default MyFavorites;
