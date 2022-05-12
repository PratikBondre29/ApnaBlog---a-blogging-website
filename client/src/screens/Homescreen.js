// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../components/Loader";
// import Sidebar from "../components/Sidebar";
// import moment from "moment";
// import { DatePicker, Space } from "antd";
// import "antd/dist/antd.css";
// import Navbar from "../components/Navbar";
// import Carousel from 'react-elastic-carousel';


// import Img1 from "./images/img1.jpg";
// import Img2 from "./images/img2.jpg";
// import Img3 from "./images/img3.jpg";
// import Img4 from "./images/img4.jpg";
// import "./Sample.css";

// import Item from "./Item";
// // import {Swiper } from 'swiper';

// import { Container, Row } from 'react-bootstrap';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';




// function Homescreen() {

//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 100, itemsToShow: 2 },
//     { width: 500, itemsToShow: 3 },
//     { width: 700, itemsToShow: 6 },
//   ];

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div style={{position:"absolute"}}>
//           <Sidebar />
//         </div>

//         <div>
//           <div>
//             <Navbar />
//           </div>
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />


//           <main >
//             <Container >
//                 <Row style={{ width:"87vw",height: '600px',position:"absolute",top:"110px",left:"342px"}} className="d-flex align-items-center">
//                     <div className="col-md-6 mr-3">
//                     <div style={{backgroundColor:"#FFFFFF",width:"100%"}} className="p-3 pl-3">
//                     <h6>Notices</h6>
//                          <br />
//                          <br />
//                        <div className="row"  style={{width:"100%",height:"100%",backgroundColor:"#FFFFFF",textAlign:"center",alignContent:"center" }}>
//                        <hr />

//                           <div className="col-md-5">
//                             <h5 className="ddr">Lorem ipsum dolor sit amet conseturana</h5>
//                             <br />
//                             <span className="datec"> 13 February 2021</span>
//                             <span className="datad">Principles office</span>
//                             <br />
//                               <section className="ddf">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                               Vestibulum malesuada magna a ex dictum faucibus.
//                                Pellentesque metus neque, ultricie bulum
//                               </section>
//                               <br />
//                               <br />
//                               <h5 className="ddr">Lorem ipsum dolor sit amet conseturana</h5>
//                               <br />
//                             <span className="datec"> 13 February 2021</span>
//                             <span className="datat" style={{}}>Principles office</span>
//                             <br />
//                               <section className="ddf">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                               Vestibulum malesuada magna a ex dictum faucibus.
//                                Pellentesque metus neque, ultricie bulum
//                               </section>
//                           </div>
//                           <hr />

//                           <div className="col-md-5">
//                           <h5 className="ddr">Lorem ipsum dolor sit amet conseturana</h5>
//                           <br />
//                             <span className="datec"> 13 February 2021</span>
//                             <span className="datat">Principles office</span>
//                             <br />
//                           <section className="ddf">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                               Vestibulum malesuada magna a ex dictum faucibus.
//                                Pellentesque metus neque, ultricie bulum
//                               </section>
//                               <br />
//                               <br />
//                               <h5 className="ddr">Lorem ipsum dolor sit amet conseturana</h5>
//                               <br />
//                             <span className="datec"> 13 February 2021</span>
//                             <span className="datat">Principles office</span>
//                             <br />
//                               <section className="ddf">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                               Vestibulum malesuada magna a ex dictum faucibus.
//                                Pellentesque metus neque, ultricie bulum
//                               </section>

//                           </div>

//                        </div>
//                        <hr />

//                          <div style={{textAlign:"center"}}>
//                          <span className="" >See all notices</span>

//                          </div>
//                     </div>

//                     </div>
//                     <div className="col-md-5"  style={{backgroundColor:"#FFFFFF"}}>
//                     <h3 className="cal pt-3">Calendar</h3>
//                         <Calendar value={new Date()} />
//                     </div>
//                 </Row>
//             </Container>
//         </main>



//           {/* {console.log(date)} */}
//       {/* {date.toString()} */}

//           {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
//       <div className="ml-5" style={{width:"1590px",backgroundColor:"#FFFFFF",padding:"20px",paddingTop:"30px",position:"relative",top:"110%",left:"14%"}}>
//         <div className="dto pb-3">Important events</div>
//         <Carousel breakPoints={breakPoints}>
//           <Item>
//             <img src={Img1} width="241px" height="229px%" style={{borderRadius:"10px"}}/>
//           </Item>
//           <Item><img width="241px" height="229px%" src={Img2} style={{borderRadius:"10px"}}/></Item>
//           <Item><img src={Img3} width="241px" height="229px%" style={{borderRadius:"10px"}}/></Item>
//           <Item><img src={Img4} width="241px" height="229px%" style={{borderRadius:"10px"}}/></Item>
//           <Item>
//             <img src={Img1} width="241px" height="229px%" style={{borderRadius:"10px"}}/>
//           </Item>
//           <Item><img src={Img2} width="241px" height="229px%" style={{borderRadius:"10px"}}/></Item>
//           <Item><img src={Img3} width="241px" height="229px%" style={{borderRadius:"10px"}}/></Item>
//           <Item><img src={Img4} width="241px" height="229px%" style={{borderRadius:"10px"}}/></Item>

//           {/* width: 241px; */}
// {/* height: 229px; */}
//         </Carousel>
//       </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homescreen;

// // #E951B8

// // #74BDEE



import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Blog from "../components/child/Blog/Blog";
import Hero from "../components/child/Hero/Hero";
// import AvatarModel from "../components/Modals/AvatarModel/AvatarModel";
import Navbar from "../components/child/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_Key } from "../config";
import { handleAPI } from "../helper/Helper";
import Loader from "../components/Loader";



const Homescreen = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [load, setLoad] = useState(true);
  const [toggle, setToggle] = useState();

  const API = API_Key;
  console.log(id);
  const handleOption = () => {
    setLoad(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
      )
      .then((response) => {
        const data = response.data.articles;
        console.log(data);
        const newdata = data.map((item)=>{
          item.title = item.title.replaceAll("%","vsb");
          item.description = item.description.replaceAll("%","");
          return item;
        })
        console.log(newdata);

        setArticle(data);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleOption();
    handleAPI();
  }, []);
  useEffect(() => {
    if(localStorage.getItem("currentTheme")=="true"){
      setToggle(true);
    }
    else {
      setToggle(false);
    }
  }, [toggle]);
  console.log(article);



  return (
    <div className="container">
      <Navbar />
      <Hero />
      {load ? (
        <Loader />
      ):(
        <Blog article={article} toggle={toggle} />
      )}

    </div>
  );
};

export default Homescreen;
