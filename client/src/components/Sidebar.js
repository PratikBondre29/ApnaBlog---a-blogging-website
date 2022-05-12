import React,{useState} from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import First from "./Group 109.svg";
import Second from "./Group 90.svg";
import Third from "./Group 124.svg";
import Fourth from "./Group 121.svg";
import Fifth from "./Group 113.svg";

{/* <i class="fas fa-arrow-left"></i> */}

const Sidebar = () => {
  const [left,setLeft] = useState(true);

  const handleClick=()=>{
    setLeft(!left);
    console.log(left);
  }

  return (
    <div
      style={{ display: "flex",position:"fixed", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#FFFFFF">
        <CDBSidebarHeader
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "#3E3F45", fontSize: "x-small" }}
          >
            Oxford public school
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              style={{ color: "#747474" }}
            >
              <CDBSidebarMenuItem className="dd mt-3">
                <img src={First} />
                <span className="dda ml-3" >Attendance</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/tables"
              activeClassName="activeClicked"
              style={{ color: "#747474" }}
            >
              <CDBSidebarMenuItem className="dd mt-5">
                <img src={Second} />
                <span className="dda ml-3" >Calendar</span>

                
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/profile"
              activeClassName="activeClicked"
              style={{ color: "#747474" }}
            >
              <CDBSidebarMenuItem className="dd mt-5">
                <img src={Third} />
                <span className="dda ml-3" >Notice Board</span>

                
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/analytics"
              activeClassName="activeClicked"
              style={{ color: "#747474" }}
            >
              <CDBSidebarMenuItem className="dd mt-5">
                <img src={Fourth} /> 
                <span className="dda ml-3" >Class Teacher</span>

                
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
              style={{ color: "#747474" }}
            >
              <CDBSidebarMenuItem className="dd mt-5">
                <img src={Fifth} />
                <span className="dda ml-3" >Graviences</span>

                
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
        {left ? (
           <CDBSidebarFooter
           style={{ textAlign: "center", backgroundColor: "#E951B8" }}
         >
           <CDBSidebarHeader
             prefix={
               <i class="fas fa-arrow-left" onClick={handleClick} style={{ color: "white" }}></i>
             }
           >
             <a
              
               className="text-decoration-none"
               style={{
                 color: "white",
                 padding: "20px 5px",
               }}
             >
               Minimize
             </a>
           </CDBSidebarHeader>
         </CDBSidebarFooter>
        ):( <CDBSidebarFooter
          style={{ textAlign: "center", backgroundColor: "#E951B8" }}
        >
          <CDBSidebarHeader
            prefix={
              <i class="fas fa-arrow-right" onClick={handleClick} style={{ color: "white" }}></i>
            }
          >
            <a
              
              className="text-decoration-none"
              style={{
                color: "white",
                padding: "20px 5px",
              }}
            ></a>
          </CDBSidebarHeader>
        </CDBSidebarFooter>)}

       
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
