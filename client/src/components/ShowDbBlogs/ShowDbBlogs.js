import React, { useState, useEffect } from "react";
import Comment from "../../components/child/Comment/Comment";
import CommentBox from "../../components/child/CommentBox/CommentBox";
import "../../components/child/BlogDetails/BlogDetails.css";
import { useParams,Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import Navbar from "../../components/child/Navbar/Navbar";



import { isAuthenticated } from "../../helper/index";
import axios from "axios";





function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const ShowDbBlogs = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const ard = localStorage.getItem("alldbblogs");
    const ardcopy = JSON.parse(ard);
    ardcopy.map((item) => {
      if (item.id == id) {
        setArticle(item);
      }
    });
    // console.log(ard);
    // console.log(ardcopy);
  }, []);


  function deletePost(id) {
    axios
        .delete(`/api/server/posts/deletepost/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));

    window.location = "/allblogs";
}

  return (
    <div className="container">
      <Navbar />
      <div className="row blogdetails">
        <div className="col-lg-8 col-10 col-md-8 mx-auto">
          {/* Post content*/}
          <article>
            {/* Post header*/}
            <header className="mb-4">
              {/* Post title*/}
              <h1 className="fw-bolder mb-1">{article.title}</h1>
              <span>Author - </span><span className="fw-bolder mb-1">{article.author}</span>
              {/* Post meta content*/}
              <div className="text-muted fst-italic mb-2">
                Posted on {article.createdAt} by {article.author}
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
              {/* <p className="fs-5 mb-4">{truncate(article.description, 150)}</p> */}
              <div
                                    className="post-body"
                                    dangerouslySetInnerHTML={{
                                        __html: article.description,
                                    }}
                                ></div>
            </section>
          </article>
          {/* for edit delete post if post is of sam */}
          <div>
            {article.authorid == isAuthenticated()._id ? (
              <>
                <Button variant="contained" color="primary">
                  <EditIcon />
                  <Link style={{color:"white"}} to={`/posts/${article.id}/edit`}>Edit</Link>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deletePost(article.id)}
                >
                  <DeleteIcon /> Delete
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* Comments section*/}
          <section className="mb-5">
            <div className="card bg-light">
              <div className="card-body">
                {/* Comment form*/}
                <CommentBox />
                <Comment data={article} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowDbBlogs;
