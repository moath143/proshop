import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'

const Buttons = (props) => {
  return (
    <>
      <Button className={props.className}>
        {props.icon}
        {props.title}
      </Button>
    </>
  );
}

export default Buttons