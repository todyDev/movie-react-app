import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            year,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster.indexOf("|") > -1 ? poster.slice(0, poster.indexOf("|")) : poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__genres">{genres}</p>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired
};

export default Movie;
