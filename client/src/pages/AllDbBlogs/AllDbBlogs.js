import React, { useState, useEffect } from "react";
import Navbar from "../../components/child/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_Key } from "../../config";
import Card from "../../components/child/Card/Card";
import Loader from "../../components/Loader";


const AllDbBlogs = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [load, setLoad] = useState(true);
  // console.log(id);

  const API = API_Key;

  const handleOption = async () => {
    setLoad(true);
      if(localStorage.getItem("alldbblogs")==null)
      {
        await axios
        .get(
          `/api/server/posts`
        )
        .then((response) => {
        //   const data = response.data.articles;
          // console.log(response);
          const arr = [];
          response.data.map((item)=>{
                const imageurl = item.pic ? item.pic : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`;
            arr.push({
                description:item.body,
                urlToImage:imageurl,
                author:item.author,
                authorid:item.authorid,
                title:item.title,
                id:item._id,
                date:item.date,
                fromdb:true,
                createdAt:item.createdAt.slice(0,10)
            })
          })
          localStorage.setItem("alldbblogs",JSON.stringify(arr));
          setArticle(arr);
          setLoad(false);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      else {
        setArticle(JSON.parse(localStorage.getItem("alldbblogs")));
        setLoad(false);
      }
  };

  useEffect(() => {
    handleOption();
  }, []);

  return (
    <div className="container">
      <Navbar />
      {load ? (<Loader />):(
        <div className="row">
        {article &&
          article.map((data, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <Card key={index} article={data} />
            </div>
          ))}
      </div>
      )
      }
    </div>
  );
};

export default AllDbBlogs;
