import React,{useState} from "react";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import "./Themetoggler.css";
import { Button } from "@material-ui/core";

const Themetoggler = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if(localStorage.getItem("currentTheme")==null){
      localStorage.setItem("currentTheme", false);
    }
    console.log(toggle);

    if(localStorage.getItem("currentTheme")=="true"){
      setToggle(!toggle);
      localStorage.setItem("currentTheme", false);
    }
    else {
      localStorage.setItem("currentTheme", true);
    }
  };
  return (
    <div>
      <Button className="themetoggle" onClick={handleToggle}>
        {toggle ? <BrightnessHighIcon /> : <Brightness4Icon />}
      </Button>
    </div>
  );
};

export default Themetoggler;
