import { MovieCard } from 'components/MovieCard';
import React, { useEffect } from 'react';
import { MoviesSliderProp } from './types';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import httpInstance from 'services/httpInstance';
import { SliderComponent, SliderContainer, SliderHeader, SliderHr, SliderLink, SliderWrapper } from './styles';
import { ArrowForwardIos } from '@mui/icons-material';

const MoviesSlider: React.FC<MoviesSliderProp> = ({
  titleShows,
  movieApiUrl,
  endpoint,
  linkToPath = '#'
}) => {
  const [movies, setMovies] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  const cardPath = endpoint;

  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const newMovies = await httpInstance.get(movieApiUrl);
      const moviesRes = newMovies.data.results.slice(0, 8);
      setMovies(moviesRes);
      setLoading(false);
    };
    getMovies();
  }, [movieApiUrl]);

  const isDefaultPath = linkToPath === '#';
  const labelColor = isDefaultPath ? '#fff' : undefined;
  const arrowColor = isDefaultPath ? '#203444' : undefined;
  const cursorStyle = isDefaultPath ? 'auto' : 'pointer';

  return (
    <SliderWrapper>
      <SliderLink to={linkToPath}>
        <SliderHeader
          style={{
            color: labelColor,
            cursor: cursorStyle
          }}
        >
          {titleShows}
          <ArrowForwardIos sx={{
            fontSize: '36px',
            paddingTop: '16px',
            color: arrowColor
          }} />
        </SliderHeader>
      </SliderLink>
      <SliderHr />
      <SliderContainer>
        <SliderComponent>
          {!loading ? (
            movies.map((movie) => (
              <Link to={`${cardPath}/${movie.id}`} key={movie.id}>
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  path={movie.poster_path}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  genreId={movie.genre_ids[0]}
                />
              </Link>
            ))) : (<CircularProgress />)}
        </SliderComponent>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default MoviesSlider;
