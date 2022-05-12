import React from "react";
import Comment from "../Comment/Comment";
import CommentBox from "../CommentBox/CommentBox";
import "./BlogDetails.css";
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const BlogDetails = ({ key, article }) => {
  return (
    <>
      <div className="row blogdetails">
        <div className=" col-12 col-lg-4 col-md-8 mx-auto">
          {/* Post content*/}
          <article>
            {/* Post header*/}
            <header className="mb-4">
              {/* Post title*/}
              <h1 className="fw-bolder mb-1">{article.title}</h1>
              {/* Post meta content*/}
              <div className="text-muted fst-italic mb-2">
                Posted on January 1, 2021 by Start Bootstrap
              </div>
              {/* Post categories*/}
              <div className=" badges">
                <span class="badge badge-success">Primary</span>
                <span class="badge badge-danger">Secondary</span>
              </div>
            </header>
            {/* Preview image figure*/}
            <figure className="mb-4">
              <img
                className="img-fluid rounded"
                src={article.urlToImage}
                alt="..."
              />
            </figure>
            {/* Post content*/}
            <section className="mb-5">
              <p className="fs-5 mb-4">{truncate(article.description, 150)}</p>
            </section>
          </article>
          {/* Comments section*/}
          {/* <section className="mb-5"> */}
            {/* <div className="card bg-light"> */}
              {/* <div className="card-body"> */}
                {/* Comment form */}
                {/* <CommentBox /> */}
                {/* <Comment /> */}
              {/* </div> */}
            {/* </div> */}
          {/* </section> */}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
