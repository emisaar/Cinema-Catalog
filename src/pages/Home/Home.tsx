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
        linkToPath='/popular'
      />
      <MoviesSlider
        titleShows='Top Rated'
        movieApiUrl={buildUrl('top_rated')}
        endpoint={'/about-movie'}
        linkToPath='/top-rated'
      />
      <MoviesSlider
        titleShows='Now Playing'
        movieApiUrl={buildUrl('now_playing')}
        endpoint={'/about-movie'}
        linkToPath='/now-playing'
      />
    </HomeWrapper>
  )
}

export default Home