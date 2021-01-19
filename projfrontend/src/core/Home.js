import React, { useState, useEffect } from "react";
import "../styles.css";

import Base from "./Base";




export default function Home() {
  
  return (
    <Base title="Home Page" description="Welcome All of you">
      <h1 className="text-white">Hey, There</h1>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 className="display-4">To view information about admin</h1>
        <p className="lead">You have to signin first.</p>
        </div>
      </div>
    </Base>
  );
}
