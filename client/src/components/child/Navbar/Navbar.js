import React, { useState,useEffect } from "react";
import logo from "../../../asset/image/logo-removebg-preview.png";
import MicIcon from "@material-ui/icons/Mic";
import "./Navbar.css";
import Themetoggler from "../Theme-Toggler/Themetoggler";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AvatarModel from "../Modals/AvatarModel/AvatarModel";
import { Avatar } from "@material-ui/core";
//import SpeechRecognition from "../SpeechRecognition/SpeechRecognition";
import { Link,useHistory } from "react-router-dom";
import SearchForm from "../SearchForm";

const Navbar = () => {
  

  const [isLogin,setLogin] = useState(false);

  const history = useHistory();

  useEffect(() => {

    if(localStorage.getItem("currentUser"))
    {
      setLogin(true);
    }

  }, []);



  function logOutBro()
  {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("apidata");
    localStorage.removeItem("alldbblogs");
    history.push("/login");
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#logo">
            <img
              src={logo}
              alt="Logo"
              height="35"
              width="150"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 me-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog"  className="nav-link">
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/allblogs" className="nav-link">
                  Blogs
                </Link>
              </li>

           {/* create new blog */}
           <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
           {/* create new blog */}

            </ul>
            <SearchForm />
            {(isLogin==false) && (
              <ul className="navbar-nav mb-2 ml-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="btn btn-primary">
                  Login/Register
                </Link>
              </li>
            </ul>
            ) }


<ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item theme-toggle">
                <Themetoggler />
              </li>
          </ul>

            <ul className="navbar-nav mb-2 nav-drop  mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle profile"
                  href="#Profile"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                    className="rounded-circle mb-0"
                    alt="avatar"
                    height="35"
                    width="40"
                  />
                </a>
                <ul
                  className="dropdown-menu options"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="/myprofile">Profile</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Contact Developers</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li className="nav-item">
                    <button className="dropdown-item" onClick={logOutBro}>
                      <PowerSettingsNewIcon />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


//             <div class="dropdown">
//   <button class="btn dropdown-toggle" style={{outline: "none",boxShadow: "none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//   <img
//                     src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
//                     className="rounded-circle mb-0"
//                     alt="avatar"
//                     height="35"
//                     width="40"
//                   />
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="/myprofile">Profile</a>
//     <a class="dropdown-item" href="#">Contact Developers</a>
//     <a class="dropdown-item" onClick={logOutBro} href="#">Log out</a>
//   </div>
// </div>








  );
};

export default Navbar;
