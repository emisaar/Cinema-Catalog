import { AccessTimeFilled, Favorite, HeartBroken, InsertInvitation, PeopleAlt, PlayCircle, Poll, Star } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';
import { MoviesSlider } from 'components/MoviesSlider';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services';
import { buildUrlRecommended } from 'utils/api';
import { GenreContainer, GenreItem, GenreSpan, GenreTitle, MainContainer, MovieButtonsContainer, MovieDescriptionBody, MovieDescriptionContainer, MovieDescriptionTagline, MovieImage, MovieInfo, MovieInfoSpan, MovieInfoText, MovieTitle, TopContainer } from './styles';
// import * as localStorage from 'local-storage';

const AboutMovie = () => {
    const { id } = useParams<{ id: string }>();
    const movieId = id || 'No ID available';

    console.log('Movie ID: ', movieId);

    const favoritesFromStorage = localStorage.getItem('favorites');
    const localFavs = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];

    const [movie, setMovie] = React.useState<any>({});
    const [loading, setLoading] = React.useState(false);
    const [favorites, setFavorites] = React.useState<string[]>(localFavs);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.movienewz.com/img/films/poster-holder.jpg';
    const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w500';

    const poster =
        movie && movie.poster_path == null
            ? DEFAULT_PLACEHOLDER_IMAGE
            : DEFAULT_IMAGE_POSTER + movie.poster_path;

    const getMovie = async () => {
        await getMovieById(movieId)
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data, 'res');
                    setMovie(res.data);
                }
            })
            .catch((err) => {
                console.log(err, 'err');
            });
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getMovie();
        setTimeout(() => getMovie(), 1000);
    }, [movieId]);

    const addFavorite = () => {
        const isDuplicate = favorites.includes(movieId);

        if (!isDuplicate) {
            const updatedFavorites = [...favorites, movieId];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            console.log('Favorites: ', updatedFavorites);
        }
        setIsFavorite(true);
    }

    const removeFavorite = () => {
        // Check if the data to be removed exists in the array
        const index = favorites.indexOf(movieId);
        if (index !== -1) {
            // Remove the data from the array
            favorites.splice(index, 1);

            // Store the updated array back in Local Storage
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Update the state of favorites
            setFavorites(favorites);
        }

        setIsFavorite(false);
    };


    return (
        <MainContainer className="show-content">
            {loading ? (
                <CircularProgress sx={{ fontSize: 'large' }} />
            ) : (
                <TopContainer>
                    <MovieImage className="image-fluid" alt={id} src={poster} />
                    <div>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieButtonsContainer>
                            <Button
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    '&:hover': {
                                        backgroundColor: "#0066CC",
                                        color: "#fff"
                                    }
                                }
                                }
                                variant="contained"
                                startIcon={<PlayCircle />}>
                                Play
                            </Button>
                            
                            {favorites.includes(movieId) ? (
                                <Button
                                    sx={{
                                        backgroundColor: "#CC0000",
                                        '&:hover': {
                                            backgroundColor: "#970000",
                                            color: "#fff"
                                        }
                                    }}
                                    variant="contained"
                                    onClick={() => removeFavorite()}
                                    startIcon={<HeartBroken />}>
                                    Favorites
                                </Button>
                            ) : (
                                <Button
                                    sx={{
                                        backgroundColor: "#00994C",
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={() => addFavorite()}
                                    startIcon={<Favorite />}>
                                    Favorites
                                </Button>
                            )}
                        </MovieButtonsContainer>
                        <hr />
                        <MovieInfo>
                            <MovieInfoSpan>
                                <PeopleAlt />
                                <MovieInfoText>
                                    {movie.adult ? '18+' : '18-'}
                                </MovieInfoText>
                            </MovieInfoSpan>
                            <MovieInfoSpan>
                                <AccessTimeFilled />
                                <MovieInfoText>
                                    {movie.runtime} min.
                                </MovieInfoText>
                            </MovieInfoSpan>
                            <MovieInfoSpan>
                                <InsertInvitation />
                                <MovieInfoText>
                                    {movie.release_date && movie.release_date.split('-')[0]}
                                </MovieInfoText>
                            </MovieInfoSpan>
                            <MovieInfoSpan>
                                <Star />
                                <MovieInfoText>
                                    {movie.vote_average}
                                </MovieInfoText>
                            </MovieInfoSpan>
                            <MovieInfoSpan>
                                <Poll />
                                <MovieInfoText>
                                    {movie.vote_count}
                                </MovieInfoText>
                            </MovieInfoSpan>
                        </MovieInfo>
                        <MovieDescriptionContainer>
                            <MovieDescriptionTagline>
                                "{movie.tagline !== '' ? movie.tagline : 'No tagline available'}"
                            </MovieDescriptionTagline>
                            <MovieDescriptionBody>
                                {movie.overview}
                            </MovieDescriptionBody>
                        </MovieDescriptionContainer>
                        <GenreContainer>
                            <GenreTitle>Genres</GenreTitle>
                            <GenreSpan>
                                {!loading && movie.genres && movie.genres.map((genre: { id: number; name: string }) => (
                                    <GenreItem className="show-label-det" key={genre.id}>
                                        {genre.name}
                                    </GenreItem>
                                ))}
                            </GenreSpan>
                        </GenreContainer>
                    </div>
                </TopContainer>)}
            <div className="show-image-detail-12">
                <MoviesSlider
                    titleShows={'Recommendations'}
                    movieApiUrl={buildUrlRecommended(movieId)}
                    endpoint={'/about-movie'}
                />
            </div>
        </MainContainer>
    )
}

export default AboutMovie