import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="card mb-4 order-1">
      <div className="card-header">Categories</div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6 ">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/blog/business">Business</Link>
              </li>
              <li>
                <Link to="/blog/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/blog/health">Health</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/blog/science">Science</Link>
              </li>
              <li>
                <Link to="/blog/sports">Sports</Link>
              </li>
              <li>
                <Link to="/blog/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
