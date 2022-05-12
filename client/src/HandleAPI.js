// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { API_Key } from "./config";

export const HandleAPI = () => {
  const API = API_Key;
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
    )
    .then((response) => {
      const data = response.data.articles;
      console.olg(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
