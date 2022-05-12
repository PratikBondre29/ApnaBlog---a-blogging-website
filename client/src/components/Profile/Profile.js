import React from "react";

import {isAuthenticated} from "../../helper/index";
import Navbar from "../child/Navbar/Navbar";



const Profile = () => {
  return (
    <div className="container">
      <Navbar />      
     {/* <h1 style={{color:"black"}}>Name: - {isAuthenticated().name} </h1> */}
     {/* <h1 style={{color:"black"}}>Email: - {isAuthenticated().email} </h1> */}

    <div className="mb-5">
    <table class="table table-striped ">
  {/* <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead> */}
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>Name</td>
      <td>Email</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>{isAuthenticated().name}</td>
      <td>{isAuthenticated().email}</td>
      {/* <td>@mdo</td> */}
    </tr>
   
   
  </tbody>
</table>
    </div>
    </div>
  );
};

export default Profile;
