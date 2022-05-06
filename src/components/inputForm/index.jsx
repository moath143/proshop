import React from 'react'
import {Form} from 'react-bootstrap'
import './style.css'

const InputForm = (props) => {
  return (
    <Form.Group className="mb-4" controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control rows={props.rows} as={props.as} type={props.type} placeholder={props.placeholder} />
    </Form.Group>
  );
}

export default InputForm