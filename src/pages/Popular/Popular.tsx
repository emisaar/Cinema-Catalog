import React, { useEffect, useState } from 'react';
import { getPopular } from 'services';
import { MovieCard } from 'components/MovieCard';
import { CircularProgress } from '@mui/material';
import { CatalogContainer, PageContainer, PageHeader, } from './styles';
import { SearchBox } from 'components/SearchBox';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchField, setSearchField] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]); // [value, setValue

  useEffect(() => {
    const filteredMovies = popularMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchField);
    });

    setFilteredMovies(filteredMovies);
  }, [searchField, popularMovies]);

  const onSearchChange = (event: any) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

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
    <PageContainer>
      <PageHeader>Popular</PageHeader>
      <SearchBox
        onChangeHandler={onSearchChange}
      />
      <CatalogContainer>
        {!loading ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              path={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
            />
          ))) : (<CircularProgress />)}
      </CatalogContainer>
    </PageContainer>
  )
}

export default Popular