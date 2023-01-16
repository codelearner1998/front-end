import React from "react";
import axios from "axios";
import { useLocation  } from "react-router-dom";


function Home() {

  const location = useLocation()


  
  return (
    <div>
      <h1> welcome {location.state.id} you have succesfully login here </h1>
    </div>
  );
}

export default Home;
