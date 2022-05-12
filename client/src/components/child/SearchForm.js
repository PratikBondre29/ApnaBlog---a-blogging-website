import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { handleFiltration, handleSubmit } from "../../helper/Helper";
import Speech from "./Speech_Recognition/Speech";
// import { Button } from "@material-ui/core";

const SearchForm = () => {
  const [value, setValue] = useState("");

  // const handleSubmit = (e) => {
  //   if (e) {
  //     return <Link to="/blogs/searched/data" />;
  //   }
  // };

  //handle Change
  // const handleChange = () => {};
  // const handle = () => {
  //   handleSubmit(value);
  // };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(value);
        setValue("");
      }}
      className="d-flex ml-lg-auto w-100"
    >
      <div class="input-group form-input">
        <input
          type="text"
          class="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search blog..."
        />
        <button type="submit" style={{ display: "none" }}>
          Submit
        </button>
        <Speech />
      </div>
    </form>
  );
};

export default SearchForm;
