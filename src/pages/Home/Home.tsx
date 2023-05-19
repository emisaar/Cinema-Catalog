import React from 'react'
import { MovieCard } from "components/MovieCard";
import { movies } from "constants/moviesMock";
import { Link } from 'react-router-dom';
import { MoviesSlider } from 'components/MoviesSlider';
import { buildUrl } from 'utils/api';
import { HomeWrapper } from './styles';

const Home = () => {
  return (
    <HomeWrapper>
      <MoviesSlider
        titleShows='Popular'
        movieApiUrl={buildUrl('popular')}
        endpoint={'/about-movie'}
        viewOn={false}
      />
      <MoviesSlider
        titleShows='Top Rated'
        movieApiUrl={buildUrl('top_rated')}
        endpoint={'/about-movie'}
        viewOn={false}
      />
      <MoviesSlider
        titleShows='Now Playing'
        movieApiUrl={buildUrl('now_playing')}
        endpoint={'/about-movie'}
        viewOn={false}
      />
    </HomeWrapper>
  )
}

export default Home