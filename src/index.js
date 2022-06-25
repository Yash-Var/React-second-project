import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import './index.css';
ReactDOM.render(
  <>
  <h1 className="heading_style">List of 5 Netflix Series </h1>
    <App
      title="A Netflix Original Series"
      Name="Frame Game"
      imgSrc="http://surl.li/cguja"
      href="https://www.netflix.com/in/title/81133092"
    />
    <App
      title="A Netflix Original Series"
      Name="Bard of Blood"
      imgSrc="http://shorturl.at/dmsFX"
      href="https://www.netflix.com/in/title/80225885"
    />
    <App
      title="A Netflix Original Series"
      Name="Sacred Games"
      imgSrc="http://shorturl.at/rvxBJ"
      href="https://www.netflix.com/in/title/80115328"
    />
  </>,
  document.getElementById("root")
);
