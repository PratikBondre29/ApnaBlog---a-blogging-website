import React from "react";

function Navbar()
{
  const user = JSON.parse(localStorage.getItem("currentUser"));

        return(
                <nav className="navbar navbar-expand-lg navbar-light" style={{ position: "relative", width: "100vw" }}>
                <a className="navbar-brand ddc pl-5" style={{marginLeft:"13%",position:"fixed",top:"1%"}} href="#"><h1>Dashboard</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                 {user ? (
                    <ul className="navbar-nav mr-auto"  style = {{position:"fixed",right:"70px",top:"10px"}}>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Hii, clerk <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ml-3 mr-3" >
                      <a className="nav-link" href="#">Link</a>
                    </li>
  
                    
                    <li>
                    <div class="dropdown mr-5 mt-1 pt-1">
                  <h4
                    class="dropdown-toggle"
                    style={{cursor:"pointer",fontSize:"larger",color:"#707070"}}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-cog" style={{fontSize:"larger",color:"#707070"}}></i>
                  </h4>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {/* <a class="dropdown-item" href="/bookings">
                      User Bookings
                    </a> */}
                    <a
                      class="dropdown-item"
                      href="/login"
                      onClick={() => localStorage.removeItem("currentUser")}
                    >
                      Logout
                    </a>
                  </div>
                </div>
                    </li>
  
                  </ul>
                 ):(
                  <ul className="navbar-nav mr-auto"  style = {{position:"fixed",right:"70px",top:"10px"}}>
                  <li className="nav-item active">
                    <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item ml-3 mr-3" >
                    <a className="nav-link" href="/register">Register</a>
                  </li>

                 

                </ul>
                 )}
  
                </div>
              </nav>
        )
}

export default Navbar;