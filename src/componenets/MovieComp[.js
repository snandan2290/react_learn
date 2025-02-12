// import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import getMovie from "../services/GetService";

const MovieComp = () => {
  const [data, setData] = useState([]);

  const API_PARAMS = "&page=1&s=titanic&type=movie";
  // const API =
  //   "http://www.omdbapi.com/?i=tt3896198&apikey=cba241bb" + API_PARAMS;

  //  const res = await axios.get(API)
  const getMovieData = async () => {
    try {
      // const res = await axios.get(API);
      const res = await getMovie(API_PARAMS);
      console.log("Movies:::", res);
      setData(res.data.Search);
    } catch (error) {
      console.log("Error::", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.imdbID}>{item.Title}</li>
      ))}
    </ul>
  );
};
export default MovieComp;
