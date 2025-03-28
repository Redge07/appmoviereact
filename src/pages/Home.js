import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [search, setSearch] = useState("test");
  const [datas, setDatas] = useState([]);
  const [sortForm, setSortForm] = useState("Default");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => {
        setDatas(res.data.results);
        console.log(res.data.results);
      });
  }, [search]);

  const functionSearch = (e) => {
    if (e.target.value == "") {
      setSearch("code");
    } else {
      setSearch(e.target.value);
      setSortForm("Default");
    }
  };
  return (
    <div>
      <Header />
      <input
        type="text"
        onChange={(e) => {
          functionSearch(e);
        }}
        on
      ></input>
      <button onClick={() => setSortForm("Top")}>Top</button>
      <button onClick={() => setSortForm("Down")}>Down</button>
      <h3>{search}</h3>
      <div className="containerMovies">
        {datas
          .sort((a, b) => {
            if (sortForm == "Top") {
              return b.vote_average - a.vote_average;
            } else if (sortForm == "Down") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((data) => {
            // return <li key={data.id}>{data.id}</li>;
            return <Card key={data.id} props={data} />;
          })}
      </div>
    </div>
  );
};

export default Home;
