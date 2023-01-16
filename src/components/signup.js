import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();

  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email1,
          password1
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Register User");
            console.log("User is already register");
            history("/");
          } else if (res.data === "notexist") {
            alert("Not Register User");
            console.log("User is not register");
            history("/home",{state:{id:email1}});
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
      <form action="/signup">
        <h1> Signup Page</h1>
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

      <Link to="/">Login page</Link>
    </div>
  );
}

export default Signup;
