import React, { FC, ReactElement } from 'react';
import './general.form.css';

export const InputBar: FC<{
  value: string
  color: string
  label: {
    key: string
    name: string
  },
  prefix?: ReactElement
  type: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({type, label, prefix, color, onChange, disabled, value}) => {

  if (disabled) color = 'gray'; 
  return (
    <div className='parent'>
      <label htmlFor={label.key} style={{
        color
      }}>{label.name}</label>
      <div style={{
        display: 'flex',
        height: '48px',
        border: `1px solid ${color}`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '48px',
          color
        }}>
          {prefix}
        </div>
        <input type={type} value={value} name={label.key} style={{
          flex: 1,
          color
        }} onChange={(e) => onChange(e)} {...disabled && {disabled}}/>
      </div>
    </div>
  )
}