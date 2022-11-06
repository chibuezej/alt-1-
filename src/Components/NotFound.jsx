import React from "react";
import { NavLink } from "react-router-dom";
import image from '../../public/images/exam404.png';


export default function Home() {
  return (
    <div className="Animation">
      <h1 className="Error">opps this page is not found
      </h1>

      <div className="image">  <img src={image} /></div>
      <p></p>
       <NavLink to="/Home">Go back {Home} Home</NavLink>
    </div>
  );
}
