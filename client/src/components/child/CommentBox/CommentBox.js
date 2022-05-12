import { Button } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import SendIcon from "@material-ui/icons/Send";
import { useParams } from "react-router-dom";
import axios from "axios";
import InputField from '../../../components/InputField';

import { isAuthenticated } from "../../../helper/index";

import { useToxicityClassifier } from '../../../hooks/useToxicityClassifier';


const CommentBox = () => {

  const { id } = useParams();

  const [comm,setComm] = useState("");

  const model = useToxicityClassifier();
  const [results, setResults] = useState(null);
  const [inputReady, setInputReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const [isToxic, setIsToxic] = useState(false);
  const [verdict, setVerdict] = useState([]);



  useEffect(() => {
    if (!model) return;
    setInputReady(true);
    model.classify(searchQuery).then(setResults);

    // if(results && results.length>0)
    // {
    //   setVerdict(results);

    // }
    // isToxic ? alert("comment is toxic"):alert("not toxic");
  }, [model, searchQuery]);


  function checkIfToxic()
  {
    if(results && results.length>0)
    {
      console.log(results);
      if(results[6].results[0].match)
      {
        alert("comment is toxic");
        setIsToxic(true);
        return true;
      }
      else
     {
     return false;
     }

      // results.map((item)=>{


        // item.results.map((subitem)=>{
        //   // console.log(item);
        //   // console.log(subitem.match);
        //   if(subitem.match)
        //   {
        //     setIsToxic(true);
        //   }
        // })

      // })
    }
    // if(isToxic)
    // {
      // return true;
    // }
    // else
    // {
    //  return false;
    // }
        // isToxic ? {return true}:console.log("");

  }


  function handlechange(e){
    setComm(e.target.value);

  }

  function handleSubmit()
  {
    // event.preventDefault();


    let resMain = checkIfToxic();

    // alert(resMain);

    if (searchQuery != "" && !resMain) {


      axios
          .post(
              `/api/server/posts/editcomm/${id}`,
              {comm:searchQuery,id:id,postername:isAuthenticated().name, createdAt: new Date().toLocaleString()}
          )
          .then((res) => window.location.reload())
          .catch((err) => console.log(err));
          setComm("");
          setSearchQuery('');
  } else {
      setSearchQuery('');
      alert("either comment is toxic or is empty");
  }
  }

  return (
    <div class="form-group">
      {/* <textarea
        class="form-control"
        onChange={handlechange}
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Join the discussion and leave a comment!"
      ></textarea> */}
      <InputField
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        inputReady={inputReady}
        onClick={checkIfToxic}
      />
      <Button variant="contained" color="primary" className="mt-2" onClick={handleSubmit}>
        <SendIcon /> Comment
      </Button>
    </div>
  );
};

export default CommentBox;
