import React, { useEffect, useState } from "react";

const Card = ({ props }) => {
  return (
    <ul>
      <li>{props.id}</li>
      <li>{props.original_title}</li>
      <li>{props.release_date}</li>
      <li>{props.vote_average}</li>
      {props.genre_ids.map((genre) => {
        return <li key={genre}>{genre}</li>;
      })}
      <li>
        <img
          src={
            props.poster_path
              ? `https://image.tmdb.org/t/p/original/` + props.poster_path
              : "./img/poster.jpg"
          }
          alt="photo"
        ></img>
      </li>
    </ul>
  );
};

export default Card;
