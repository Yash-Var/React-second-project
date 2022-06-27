import React from "react";
import "./container.css";
import Cards from "./Cards.js";

import sdata from "./Sdata.js";

// import './index.css';
const App = () => (
  <>
    <h1 className="heading_style">List Some Netflix Series </h1>

        <div class="right-container">
    {sdata.map((val) => {
      return (
        <Cards
          key={val.id}
          title={val.title}
          Name={val.sname}
          imgSrc={val.imgsrc}
          href={val.links}
        />
      );
    })}
        </div>
   
  </>
);
export default App;
