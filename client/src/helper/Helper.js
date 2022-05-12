import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { API_Key } from "../config";

export const handleAPI = () => {
  const API = API_Key;
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
    )
    .then((response) => {
      let data = response.data.articles;
      console.log(data);
      localStorage.setItem("apidata", JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleSubmit = (param) => {
  const redirect = () => {
    //  return <Redirect to={`/blogs/searched/${param}`} />;
    window.location.href = `/blogs/searched/${param}`;
  };
  if (param) {
    console.log(param);
    redirect();
  }
  //   const data = "hello";
};
