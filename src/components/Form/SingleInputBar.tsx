import React, { FC, useState } from 'react';
import './general.form.less';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Button } from 'antd';

export const SingleInputBar: FC<{
  onSubmit: (value: string) => void
  secondary?: boolean
  placeholder: string
  style?: {}
  size?: string
  buttonText: string
}> = (props) => {

  const { xs } = useBreakpoint();

  const [ value, setValue ] = useState<string>('');

  return (
    <div style={{
      display: 'flex',
      ...props.style,
      ...xs && {flexDirection: 'column'} 
    }}>
      <input type='text' style={{
        paddingLeft: '12px',
        height: props.size || '48px',
        border: `1px solid ${props.secondary ? 'white' : '#20274D'}`
      }} value={value} onChange={(e) => setValue(e.target.value)} placeholder={props.placeholder}></input>
      <Button style={{
        height: '48px',
        color: props.secondary ? "#20274D" : "#fff",
        backgroundColor: !props.secondary ? "#20274D" : "#fff",
        border: 'none',
        fontWeight: 600
      }} onClick={() => {
        props.onSubmit(value)
      }}>{props.buttonText}</Button>
    </div>
  )
}