import React from "react";
import { HideUntilLoaded } from "react-animation";
import { Rings } from "react-loader-spinner";

function SingleCard({ movie }) {
  return (
    <div className="col">
      <div className="card">
        <HideUntilLoaded
          animationIn="popIn"
          imageToLoad={"https://image.tmdb.org/t/p/original" + movie.Poster}
          Spinner={() => <Rings color="#0d6efd" height={100} width={100} />}
        >
          <img
            src={"https://image.tmdb.org/t/p/original" + movie.Poster}
            className="card-img-top"
            alt={movie.Title}
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary  ">
            {movie.IMDB_Rating}
          </span>
        </HideUntilLoaded>
      </div>
    </div>
  );
}

export default SingleCard;
