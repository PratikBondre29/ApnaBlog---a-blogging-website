import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_Key } from "../../config";
import Card from "../../components/child/Card/Card";
import BlogDetails from "../../components/child/BlogDetails/BlogDetails";

//import { data } from "../../HandleAPI";
const BlogWithKey = () => {
  let { blogid } = useParams();
  const [article, setArticle] = useState([]);
  //   const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [cardData, setCardData] = useState([]);
  const API = API_Key;
  //   console.log(id);
  const handleOption = () => {
    // if (typeof id !== "undefined" && id !== null) {
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
  };

  useEffect(() => {
    handleOption();
  }, []);

  //   let regex = /[^a-z-]/gi;
  //   id = id.replace(regex, "");
  // console.log(blogid);

  const result = article.filter((blog) => {
    if (blog.title === blogid) {
      return blog;
    } 
  });
  //   setCardData(result);
  //   console.log(cardData);
  return (
    <div className=" container">
      {result &&
        result.map((data, index) => <BlogDetails key={index} article={data} />)}
    </div>
  );
};

export default BlogWithKey;
