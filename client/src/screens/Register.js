import React,{useState} from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";
import Navbar from "../components/Navbar";


function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

const [loading, setLoading] = useState();
const [error, setError] = useState();
const [success, setSuccess] = useState();


  const register=async ()=>{
    if(password === cpassword){
      const user ={
        name,
        email,
        password,
        cpassword
      }
      try {
        setLoading(true)
        const result =await axios.post("/api/users/register",user);
        setLoading(false)
        setError(false)
        setSuccess(true)
        console.log(result);
        // alert("registered successfully")
        setCpassword("")
        setEmail("")
        setPassword("")
        setName("")
      } catch (error) {
        setLoading(false)

        setError(true)
        console.log(error);
      }
    }else{
      alert("passwords not matching");
    }

    console.log(`${name} ${email} ${password} ${cpassword}`);
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success message="user registered successfully" />}
      {<Navbar />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            <h2>Register</h2>
            <input
              type="email"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />

            <button className="btn btn-success mt-3" onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
