import { CircularProgress } from '@mui/material';
import { MovieCard } from 'components/MovieCard';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopRated } from 'services';
import { CatalogContainer, PageContainer, PageHeader } from './styles';
import { SearchBox } from 'components/SearchBox';

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchField, setSearchField] = useState<string>('');
  const [filteredMovies, setFilteredMonsters] = useState<any[]>([]); // [value, setValue

  useEffect(() => {
    const filteredMovies = topRatedMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(filteredMovies);
  }, [searchField, topRatedMovies]);

  const onSearchChange = (event: any) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

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
    <PageContainer>
      <PageHeader>Top Rated</PageHeader>
      <SearchBox
        onChangeHandler={onSearchChange}
      />
      <CatalogContainer>
        {!loading ? (
          topRatedMovies.map((movie) => (
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

export default TopRated