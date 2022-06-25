import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import sdata from "./Sdata.js";


// import './index.css';
function ncard(val){
  return(
    <App
    title={val.title}
    Name={val.sname}
    imgSrc={val.imgsrc}
    href={val.links}
  />
  );
}
ReactDOM.render(
  <>
  <h1 className="heading_style">List Some  Netflix Series </h1>
   
  { sdata.map(ncard)}; 
  </>,
  document.getElementById("root")
);
