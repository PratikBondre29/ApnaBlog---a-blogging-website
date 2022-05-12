import React from "react";
import Card from "../Card/Card";
import Categories from "../Categories/Categories";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Blog = ({ article, toggle }) => {
  return (
    <div className="row">
      {/* Blog entries*/}
      <div className="col-lg-8">
        {/* Nested row for non-featured blog posts*/}
        <div className="row">
          {article.length>0 ? (
            <>
            {article &&
            article.map(
              (data, index) => (
              <div key={index} className="col-lg-6">
                <Card key={index} article={data} toggle={toggle}/>
              </div>
            ))}
            </>
          ):(
            <h1>Loading</h1>
          )}

        </div>
        {/* Pagination*/}
        <nav aria-label="Pagination">
          <hr className="my-0" />
          <ul className="pagination justify-content-center my-4">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#i"
                tabIndex={-1}
                aria-disabled="true"
              >
                Newer
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#!">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">
                3
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#!">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">
                15
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">
                Older
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Side widgets*/}
      <div className="col-lg-4">
        {/* Search widget*/}

        {/* Categories widget*/}
        <Categories />
        {/* Side widget*/}
        <div className="card mb-4">
          <div className="card-header">Side Widget</div>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are
            easy to use, and feature the Bootstrap 5 card component!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
