import React from "react";
import ReactDOM from "react-dom";

function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgSrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.Name}</h3>
          <a href={props.href} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<>
  <Cards title="A Netflix Original Series" Name="Frame Game" imgSrc="http://surl.li/cguja" href="https://www.netflix.com/in/title/81133092" />
</>, document.getElementById("root"));
