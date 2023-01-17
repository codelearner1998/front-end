import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Styles from "./style";



function Login() {
  const history = useNavigate();

  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email1,
          password1
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Register User");
            console.log("User is already register");
            history("/home",{state:{id:email1}});
          } else if (res.data === "notexist") {
            alert("Not Register User");
            console.log("User is not register");
            history("/signup");
            
          }
        })
        .catch((e) => {
          alert("wrong details entered ");
          console.log("wrong details entered");
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (



    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login Form</h2>
        <div class="text-center mb-5 text-dark">Made with bootstrap</div>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5" style={Styles.card}>

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile" />
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" onChange={(e)=>{
                setEmail(e.target.value)
              }} id="Email" aria-describedby="emailHelp"
                placeholder="User Name" />
            </div>
            <div class="mb-3">
              <input type="password" onChange={(e)=>{
                setPassword(e.target.value)
              }}  class="form-control" id="password" placeholder="password" />
            </div>
            <div class="text-center"><button type="submit"  onClick={submit} class="btn btn-color px-5 mb-5 w-100" style={Styles.stylebtn}>Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="/signup" class="text-dark fw-bold" style={Styles.a} > Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>




    














    
    // <div className="container">



         

     
    //   <form action="/"    className="card-body cardbody-color p-lg-5">
    //     <h1> Login Page</h1>

    //     <div class="text-center">
    //           <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
    //             width="200px" alt="profile" />
    //     </div>
        
    //     <div className="mb3">
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
          
    //       }}
    //       className="form-control" 
    //       id="username"
    //       placeholder="email"
    //     />
    //     </div>
      
        
    //     <div className="mb-3">
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //       className="form-control" 
    //       id="username"
    //       placeholder="paasword"
          
    //     />
    //     </div>
    //     <button type="submit" onClick={submit}>
    //       Submit
    //     </button>
    //   </form>
    //   <p>or</p>

    //   <Link to="/signup">Signup page</Link>
    // </div>
  );
}

export default Login;
