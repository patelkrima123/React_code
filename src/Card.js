import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
    <div className='col-md-4 col-10 mx-auto'>
      <div className="card" >
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-danger font-weight-bold">{props.title}</h5>
          <p className="card-text">
           {props.text}
          </p>
          <NavLink to='https://www.ordextechnology.com/success-stories/' className="btn btn-primary">
           {props.title}
          </NavLink>
        </div>
      </div>
      </div>
    </>
  );
}
export default Card;
