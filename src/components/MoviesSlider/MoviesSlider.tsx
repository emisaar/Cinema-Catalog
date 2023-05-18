import { MovieCard } from 'components/MovieCard';
import { MovieCardProp } from 'components/MovieCard/types';
import React, { useEffect } from 'react'
import { MoviesSliderProp } from './types';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { getRecommendations } from 'services';
import axios from 'axios';
import httpInstance from 'services/httpInstance';

const MoviesSlider: React.FC<MoviesSliderProp> = ({
    titleShows,
    movieApiUrl,
    endpoint,
    viewOn
}) => {
    const [movies, setMovies] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);
    // necesito el id de la película que está en la url para pasársela
    // a la función getRecommendations
    const { id } = useParams<{ id: string }>();
    const movieId = id || 'No ID available';

    const cardPath = endpoint;

    useEffect(() => {
        setLoading(true);
        const getMovies = async () => {
            const newMovies = await httpInstance.get(movieApiUrl);
            const moviesRes = newMovies.data.results;
            setMovies(moviesRes);
            setLoading(false);
        };
        getMovies();
    }, [movieApiUrl]);

    return (
        <div>
            <h1>{titleShows}</h1>
            {!loading ? (
                movies.map((movie) => (
                    <Link to={`${cardPath}/${movie.id}`}>
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
    );
};

export default MoviesSlider;