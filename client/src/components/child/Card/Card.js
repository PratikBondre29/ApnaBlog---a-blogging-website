import React,{useState,useEffect} from "react";
import "./Card.css";
import { Button } from "@material-ui/core";
import ArrowUpwardTwoToneIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import ArrowDownwardTwoToneIcon from "@material-ui/icons/ArrowDownwardTwoTone";
import { Link } from "react-router-dom";
import { Modal, Carousel } from "react-bootstrap";
import summarize from "../../summarizer";
import Texttospeech from "../TextToSpeech/Texttospeech";



function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const Card = ({ key, article, toggle }) => {


  const [show, setShow] = useState(false);
  const [articleDetails, setArticleDetails] = useState({});
  const [articleSummary, setArticleSummary] = useState({});

     const handleClose = () => setShow(false);
     const handleShow = (id) => {
       setShow(true);
       const ard = localStorage.getItem("alldbblogs");
       const ardcopy = JSON.parse(ard);
       ardcopy.map((item) => {
         if (item.id == id) {
          let output = summarize(item.description);
           setArticleDetails(output);
         }
       });
      }


  return (
    <div className={`card mb-4 ${localStorage.getItem("currentTheme")=="true" && "card-toggle"}`}>
      <a href="#!">
        <img className="card-img-top" src={article.urlToImage} alt="..." />
      </a>
      <div className="card-body">
      <div className="row">
      <div className="small text-muted col-10">CreatedAt: {article.createdAt}</div>
      <Texttospeech className="col-2" name={article.title} />
      </div>

        <h2 className="card-title"> {article.title}</h2>


        {/* <p className="card-text text-black">
          {truncate(article.description, 150)}
        </p> */}
        <p
        className="post-body"
        dangerouslySetInnerHTML={{
            __html: truncate(article.description, 150),
        }}
        ></p>
        <hr className="dropdown-divider" />
        <div className="updowncom">
          <Button variant="outlined" color="primary">
            <ArrowUpwardTwoToneIcon /> Upvote
          </Button>
          <Button variant="outlined" color="secondary">
            <ArrowDownwardTwoToneIcon /> Downvote
          </Button>
        </div>
        {/* <a className="btn btn-primary readmore" href="#!">
          Read more →
        </a> */}
        {/* <Link
          to={`/blogs/${article.title}`}
          className="btn btn-primary readmore"
        >
          Read more →
        </Link> */}

        {article.fromdb ? (
          <>
          <Link
          to={`/viewblog/${article.id}`}
          className="btn btn-primary readmore"
        >
          Explore →
        </Link>
        {/* <br /> */}

        <Button
          onClick={()=>handleShow(article.id)}
          className="btn btn-primary readmore"
        >
          Read summary →
        </Button>


  <div>
  <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header>
            <Modal.Title>{article.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* carousal */}
            {/* <Carousel prevLabel="" nextLabel=""> */}
            {/* {room.imageurls.map((img,index)=>{
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 bigimg"
                      src={room.imageurls[index]}
                      alt="First slide"
                    />

                  </Carousel.Item>
                );
            })} */}


            {/* </Carousel> */}

            {/* carousal */}
            {/* <p>{article.description}</p> */}
            <div
                                    className="post-body"
                                    dangerouslySetInnerHTML={{
                                        __html: articleDetails,
                                    }}
                                ></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
  </div>


          </>

        ):(
          <>
          {article.title.indexOf("vsb")>-1 ? (
            <p style={{color:"black"}}>details not available</p>
          ):(
               <Link
               to={`/blogs/${article.title}`}
               className="btn btn-primary readmore"
             >
               Read more →
             </Link>
          )}

          </>

        )}
      </div>
    </div>
  );
};

export default Card;
