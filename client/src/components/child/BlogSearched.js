import React from "react";
import { useParams } from "react-router-dom";
import { handleAPI } from "../../helper/Helper";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";



const handleGetData = () => {
  let data = JSON.parse(localStorage.getItem("apidata"));

  if (typeof data !== "undefined") {
    HandleFiltration(data);
  }
};
var filtereddata;
const HandleFiltration = (data) => {
  //   const data = handleAPI();
  const { id } = useParams();

  filtereddata = data.filter((blog) => {
    return blog["title"].toLowerCase().includes(id.toLowerCase());
  });
  console.log(id);
  console.log({ data });
};
const BlogSearched = () => {
  return (
    <div className="container">
      <Navbar />
      {handleGetData()}
      {filtereddata &&
        filtereddata.map((data, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <Card key={index} article={data} />
          </div>
        ))}
    </div>
  );
};

export default BlogSearched;
