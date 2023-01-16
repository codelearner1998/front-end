import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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




    














    
    <div>
      <form action="/">
        <h1> Login Page</h1>
        <label>Email </label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />{" "}
        <br /> <br />
        <label>Password </label>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="paasword"
        />
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
      <p>or</p>

      <Link to="/signup">Signup page</Link>
    </div>
  );
}

export default Login;
