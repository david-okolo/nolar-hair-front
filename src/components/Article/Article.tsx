import React, { FC } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

export const Article: FC<{
  heading: string
  paragraph: string
}> = ({heading, paragraph}) => {

  const { xs, lg, xl } = useBreakpoint();

  return (
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      maxWidth: '450px',
      ...!lg && {textAlign: 'center'}
    }}>
      <h2 style={{
        fontSize: (xs && '36px') || (!xl && '48px') || '64px',
        marginBottom: '30px'
      }}>{heading}</h2>
      <p style={{
        ...xs && {fontSize: '12px', fontWeight: 300},
      }}>{paragraph}</p>
    </article>
  )
}