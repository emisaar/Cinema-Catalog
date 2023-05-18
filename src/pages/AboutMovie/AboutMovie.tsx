import { AccessTimeFilled, Favorite, InsertInvitation, PeopleAlt, Poll, Star } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';
import { MoviesSlider } from 'components/MoviesSlider';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieById, getRecommendations } from 'services';
import { buildUrl, buildUrlRecommended } from 'utils/api';

const AboutMovie = () => {
    const { id } = useParams<{ id: string }>();
    const movieId = id || 'No ID available';

    console.log('Movie ID: ', movieId);

    const [movie, setMovie] = React.useState<any>({});
    const [loading, setLoading] = React.useState(false);
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
        // setTimeout(() => getMovie(), 1000);
    }, [movieId]);


    return (
        <div>
            <div className="show-content">
                {loading ? (
                    <CircularProgress />
                ) : (
                    <div>
                        <div className="show-details">
                            <div className="show-container">
                                <div className="show-row">
                                    <div className="show-image-detail-3">
                                        <div className="show-row">
                                            <div className="show-image-detail-12">
                                                <div className="image-detail-thumb">
                                                    <img className="image-fluid" alt={id} src={poster} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="show-image-detail-9">
                                        <div className="show-detail-content">
                                            <div className="show-det-title">
                                                <h2>{movie.title}</h2>
                                            </div>
                                            <div className="show-det-info">
                                                <span>
                                                    <PeopleAlt className="my-icons" />
                                                    {movie.adult ? '18+' : '18-'}
                                                </span>
                                                <span>
                                                    <AccessTimeFilled />
                                                    {movie.runtime} min.
                                                    {/* <FontAwesomeIcon icon="clock" className="my-icons" />
                                                    {show.runtime} min. */}
                                                </span>
                                                <span>
                                                    <InsertInvitation />
                                                    {/* {movie.release_date.split('-')[0]} */}
                                                    {/* <FontAwesomeIcon icon="calendar-day" className="my-icons" />
                                                    {show.release_date.split('-')[0]} */}
                                                </span>
                                                <span>
                                                    <Star />
                                                    {movie.vote_average}
                                                    {/* <FontAwesomeIcon icon="star" className="my-icons" />
                                                    {show.vote_average} */}
                                                </span>
                                                <span>
                                                    <Poll />
                                                    {movie.vote_count}
                                                    {/* <FontAwesomeIcon icon="poll" className="my-icons" />
                                                    {show.vote_count} */}
                                                </span>
                                            </div>
                                            <div className="show-det-desc">
                                                <p>
                                                    "{movie.tagline}"
                                                    <br />
                                                    {movie.overview}
                                                </p>
                                            </div>
                                            <div className="show-det-extra">
                                                <div className="extra-block">
                                                    <h5 className="extra-title">Genres</h5>
                                                    {!loading && movie.genres && movie.genres.map((genre: { id: number; name: string }) => (
                                                        <div className="show-label-det" key={genre.id}>
                                                            {genre.name}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="extra-block">
                                                    <h5 className="extra-title">Favorite</h5>
                                                    {isFavorite ? (
                                                        <Button variant="contained" color="error" onClick={() => setIsFavorite(false)} startIcon={<Favorite />}>
                                                            Remove from Favorites
                                                        </Button>
                                                    ) : (
                                                        <Button variant="contained" color="success" onClick={() => setIsFavorite(true)} startIcon={<Favorite />}>
                                                            Add to Favorites
                                                        </Button>
                                                    )}
                                                    {/* {isFavorite ? (
                          <button className="button-favorite-add" onClick={removeFavorite}>
                            <FontAwesomeIcon icon="heart-broken" className="my-icons" />
                            Remove from Favorites
                          </button>
                        ) : (
                          <button className="button-favorite-remove" onClick={addFavorite}>
                            <FontAwesomeIcon icon="heart" className="my-icons" />
                            Add to Favorites
                          </button>
                        )} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-image-detail-12">
                            <MoviesSlider
                                titleShows={'Recommendations'}
                                movieApiUrl={buildUrlRecommended(movieId)}
                                endpoint={'/about-movie'}
                                viewOn={false}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutMovie