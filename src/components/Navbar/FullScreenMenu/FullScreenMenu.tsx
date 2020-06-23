import React, { FC } from 'react';
import { INavbarLink } from '../navbar.interface';

export const FullScreenMenu: FC<{
  backgroundColor: string
  links: Array<INavbarLink>
}> = (props) => {

  const { backgroundColor, links } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        flexDirection: 'column',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        backgroundColor,
      }}
    >
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {
          links.map(item => {
            return <li style={{
              cursor: 'pointer',
              margin: '1em 0',
              color: '#eee'
            }}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}