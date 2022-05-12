import React,{useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
function Loader() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");


    const override ={
        display: "block",
      margin: "0 auto",
      borderColor: "red"
    }



    return (
      <div style={{marginTop:"200px"}}>
        <div className="sweet-loading">


          <HashLoader
            color="#000"
            loading={loading}
            css={override}
            size={80}
          />
        </div>
      </div>
    );
}

export default Loader
