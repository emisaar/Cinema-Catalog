import React from "react";
import { IMAGE_SOURCE } from "constants/moviesMock";
import genres from "constants/genres.json";
import { MovieCardProp } from "./types";
import {
  CalificationText,
  ImageContainer,
  InfoShow,
  ShowBox,
  ShowCalification,
  ShowLabelTitle,
  ShowThumb,
  ShowTitle,
} from "./styles";
import { Pill } from "components/Pill";
import { Link } from "react-router-dom";
import { Star } from "@mui/icons-material";

const MovieCard: React.FC<MovieCardProp> = ({
  id,
  path,
  title,
  voteAverage,
  genreId,
}) => {
  const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.movienewz.com/img/films/poster-holder.jpg';
  const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w500';

  const poster =
    path == null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : DEFAULT_IMAGE_POSTER + path;

  const getGenre = (genreId: number) => {
    const key: any = Object.keys(genres.genres).find(
      (genre: any): boolean => genres.genres[genre].id === genreId
    );
    if (key) {
      return genres.genres[key].name;
    }
    return "Not Classified";
  };

  const getColor = (rating: number) => {
    if (rating >= 8) {
      return '#74B566';
    } else if (rating >= 7) {
      return '#efca54';
    }
  }

  return (
    <ShowBox>
      <Link to={`/about-movie/${id}`}>
        <ImageContainer>
          <ShowThumb src={poster} />
        </ImageContainer>
        <InfoShow>
          <ShowTitle>
            <Pill genre={getGenre(genreId)} pillColor={getColor(voteAverage)} />
            <ShowLabelTitle>{title}</ShowLabelTitle>
            <ShowCalification>
              <Star sx={{ fontSize: "18px", paddingTop: "2px"}}/>
              <CalificationText>
                {voteAverage} / 10
              </CalificationText>
            </ShowCalification>
          </ShowTitle>
        </InfoShow>
      </Link>
    </ShowBox>
  );
};

export default MovieCard;
