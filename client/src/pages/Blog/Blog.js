import React, { useState, useEffect } from "react";
import Navbar from "../../components/child/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_Key } from "../../config";
import Card from "../../components/child/Card/Card";

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(id);

  const API = API_Key;

  const handleOption = () => {
    if (typeof id !== "undefined" && id !== null) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${id}&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          const newdata = data.map((item)=>{
            item.title = item.title.replaceAll("%","vsb");
            item.description = item.description.replaceAll("%","");
            return item;
          })
          console.log(newdata);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (typeof id === "undefined" || id === null) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
        const newdata = data.map((item)=>{
          item.title = item.title.replaceAll("%","vsb");
          item.description = item.description.replaceAll("%","");
          return item;
        })
        console.log(newdata);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(id);
    }
  };
  useEffect(() => {
    handleOption();
  }, []);

  return (
    <div className="container">
    <Navbar />
      {
        <div className="row">
          {article &&
            article.map((data, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Card key={index} article={data} />
              </div>
            ))}
        </div>
      }
    </div>
  );
};

export default Blog;
