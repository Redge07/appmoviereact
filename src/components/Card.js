import React, { useEffect, useState } from "react";

const Card = ({ props }) => {
  const addStorage = () => {
    let actuelData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!actuelData.includes(props.id.toString())) {
      actuelData.push(props.id);
      window.localStorage.movies = actuelData;
    }
    console.log(window.localStorage.movies);
  };

  const removeStorage = () => {
    let actuelData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (actuelData.includes(props.id.toString())) {
      let newData = actuelData.filter((id) => id != props.id);
      window.localStorage.movies = newData;
    }
    console.log(window.localStorage.movies);
  };

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
              : "./poster.jpg"
          }
          alt="photo"
        ></img>
      </li>
      <li className="description">{props.overview}</li>
      <button onClick={() => addStorage()}>Like</button>
      <button onClick={() => removeStorage()}>Dislike</button>
    </ul>
  );
};

export default Card;
