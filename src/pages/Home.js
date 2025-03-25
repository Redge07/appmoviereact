import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => {
        setData(res.data.page);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <Header />
      <h2>Bonsoir a tous</h2>
      <h3>{data}</h3>
    </div>
  );
};

export default Home;
