import React,{useState,useEffect} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ArrowUpwardTwoToneIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import ArrowDownwardTwoToneIcon from "@material-ui/icons/ArrowDownwardTwoTone";
import { Button } from "@material-ui/core";
import "./Comment.css";
import axios from "axios";
import { useParams } from "react-router-dom";




const Comment = ({data}) => {


  const [commlist, setCommlist] = useState([]);
  const [isThereAny,setIsThereAny] = useState(true);
  const { id } = useParams();



  const handleOption = async () => {
        setIsThereAny(true);
        await axios
        .get(
          `/api/server/posts`
        )
        .then((response) => {
        //   const data = response.data.articles;
          console.log(response);
          const arr = [];
          response.data.map((item)=>{

            if(item._id==id)
            {
              item.comments.map((subitem)=>{
                arr.push(subitem);
              })
            }
            })
          setCommlist(arr);
          console.log(arr);
          if(arr.length<1)
          {
            setIsThereAny(false);
          }

        })
        .catch((error) => {
          console.log(error);
        });
  };

  useEffect(() => {
    handleOption();
  }, []);


  return (
    <div className="">



{commlist.length > 0 ? commlist.map((comment,index)=>(
          <div key={index} className="mb-4">
          <div className="" >
        <img
          className="rounded-circle"
          src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
          alt="..."
        />
        <div className="fw-bold" style={{display:"inline"}}>
          {comment.postername} <span class="badge badge-warning">{comment.createdAt}</span>
        </div>
      </div>
      <div className="ms-3">
        {/* <div className="fw-bold">
          Commenter Name <span class="badge badge-warning">14-Jan-2021</span>
        </div> */}
       {comment.comment}

        <div className="updowndeleteedit">
          <Button variant="outlined" color="primary">
            <ArrowUpwardTwoToneIcon /> Upvote
          </Button>
          <Button variant="outlined" color="secondary">
            <ArrowDownwardTwoToneIcon /> Downvote
          </Button>
          <Button variant="contained" color="primary">
            <EditIcon /> Edit
          </Button>
          <Button variant="contained" color="secondary">
            <DeleteIcon /> Delete
          </Button>
        </div>
      </div>
          </div>
        )):(<>
        {isThereAny ? <h4>Loading comments....</h4>:<h4>No comments yet</h4>}

        {/* <div
                          className="spinner-container"
                          style={{display:"inline"}}
                      >
                          <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                          </div>
                      </div> */}

        </>)}
    </div>
  );
};

export default Comment;
