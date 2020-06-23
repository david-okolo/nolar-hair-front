import React, { FC, ReactElement } from 'react'
import './general.form.css'

export const SelectBar: FC<{
  value: string
  color: string
  prefix?: ReactElement
  options: Array<{
    value: string | number
    name: string
  }>
  label: {
    key: string
    name: string
  }
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}> = ({options, label, prefix, color, onChange, disabled, value}) => {

  if (disabled) color = 'gray';
  return (
    <div className='parent'>
      <label htmlFor={label.key} style={{
        color
      }}>{label.name}</label>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
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
        <select name={label.key} value={value} style={{
          flex: 1,
          color
        }} onChange={(e) => onChange(e)} {...disabled && {disabled}}>
          {options.map(item => {
            return (
            <option key={item.value} value={item.value}>{item.name}</option>
            )
          })}
        </select>
      </div>
    </div>
  )
}