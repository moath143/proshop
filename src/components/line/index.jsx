import React from 'react'
import './style.css'

const Line = (props) => {
  return (
    <div className="heading">
      <h2 className={`title-section ${props.position}`}> {props.title} </h2>
      <div className={props.className}>
        <span></span>
        <hr />
      </div>
    </div>
  );
}

export default Line