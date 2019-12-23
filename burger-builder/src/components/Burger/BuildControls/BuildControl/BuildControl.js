import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="More">ADD</button>
    <button className="Less">REMOVE</button>
  </div>
)

export default buildControl;
