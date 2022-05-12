import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";


function Login() {
  const [email, setEmail] = useState("v@gmail.com");
  const [password, setPassword] = useState("123");

const [loading, setLoading] = useState();
const [error, setError] = useState();
 

  const Login = async() => {
    console.log(`${email} ${password}`);
     const user = {

       email,
       password,

     };
     try {
         setLoading(true);

       const result = await axios.post("/api/users/login", user);
       localStorage.setItem("currentUser",JSON.stringify(result.data));
    //    window.location.href="/home"
       console.log(result.data);
       setLoading(false);
       setError(false);
       if(!result.data.error){
        //    alert("login successful");
        // window.location.href = "/home";
        window.location.href = "/";
       }else{
           console.log("login failed");
            setError(true);
            // alert("login fail");
       }
     } catch (error) {
         setLoading(false)
         setError(true)
       console.log(error);
     }
  };

  return (
    <div>
        {loading && <Loader />}
        {<Navbar />}
      <div className="row justify-content-center mt-5">
          {error && <Error />}

        <div className="col-md-5">
          <div className="bs">
            <h2>Login</h2>

            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


            <button className="btn btn-success mt-3" onClick={Login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
