import React, { FC, ReactElement } from 'react';
import './Button.css'

export const Button: FC<{
  onClick: () => void
  text: string
  type?: string
  icon?: ReactElement
  style?: {}
}> = (props) => {

  let appendedClassNames = `custom-btn-${props.type || 'primary'}`;

  return (
  <button style={props.style || {}} className={`custom-btn ${appendedClassNames}`} onClick={props.onClick}>{props.text} {props.icon}</button>
  )
}