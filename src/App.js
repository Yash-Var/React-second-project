import React from 'react';
import './index.css';
function App(props) {
  return (
    <div className='yash'>
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
    </div>
  );
}
export default App;