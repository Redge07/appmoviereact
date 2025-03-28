import axios from "axios";
import React, { useEffect, useState } from "react";

const Coeur = () => {
  const [datas, setDatas] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let actuelDatas = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    setDatas(actuelDatas);
    for (let i = 0; i < actuelDatas.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${actuelDatas[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setMovies((movies) => [...movies, res.data]));
    }
    console.log(actuelDatas);

    console.log(movies);
  }, []);

  return <div className="containerCoeur">{datas.map((data) => data)}</div>;
};

export default Coeur;
