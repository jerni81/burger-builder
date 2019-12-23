import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button onClick={props.added} className="More">ADD</button>
    <button onClick={props.removed} className="Less" disabled={props.disabled}>REMOVE</button>
  </div>
)

export default buildControl;
