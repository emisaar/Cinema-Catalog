import { CircularProgress } from '@mui/material';
import { MovieCard } from 'components/MovieCard';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getNowPlaying } from 'services';
import { CatalogContainer, PageContainer, PageHeader } from './styles';
import { SearchBox } from 'components/SearchBox';

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchField, setSearchField] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]); // [value, setValue

  useEffect(() => {
    const filteredMovies = nowPlayingMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchField);
    });

    setFilteredMovies(filteredMovies);
  }, [searchField, nowPlayingMovies]);

  const onSearchChange = (event: any) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }


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
    <PageContainer>
      <PageHeader>Now Playing</PageHeader>
      <SearchBox
        onChangeHandler={onSearchChange}
      />
      <CatalogContainer>
        {!loading ? (
          nowPlayingMovies.map((movie) => (
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

export default NowPlaying