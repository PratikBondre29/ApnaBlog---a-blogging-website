import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import AvatarModel from "../components/Modals/AvatarModel/AvatarModel";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_Key } from "../config";
import { handleAPI } from "../helper/Helper";

const Main = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(false);
  const API = API_Key;
  console.log(id);
  const handleOption = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
      )
      .then((response) => {
        const data = response.data.articles;
        console.log(data);
        setArticle(data);
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleOption();
    handleAPI();
  }, []);
  console.log(article);

  const handleToggle = () => {
    localStorage.setItem("currentTheme", true);
    console.log("setdefault");
  };

  return (
    <div className="container">
      <Navbar handleToggle={handleToggle} toggle={toggle} />
      <Hero />
      <Blog article={article} toggle={toggle} />
    </div>
  );
};

export default Main;
