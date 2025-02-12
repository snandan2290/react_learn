import axios from "axios";

const SEREVRS = {};

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

const getMovie = (params) => {
  const res = api.get("?i=tt3896198&apikey=cba241bb" + params);
  return res;
};

export default getMovie;
