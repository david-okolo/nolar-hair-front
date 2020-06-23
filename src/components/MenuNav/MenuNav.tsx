import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './MenuNav.css';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

export const MenuNav: FC<{
  color: string,
  links: Array<{
    title: string,
    to?: string
  }>
}> = ({color, links}) => {

  const { lg } = useBreakpoint();

  const fontSize = '24px';
  const width = '264px';

  return (
    <div className="services-menu" style={{
      borderColor: color
    }}>
      {links.map((item, index) => {
          if (item.to) {
            return (
              <li key={index} {...index === 0 && {className: 'active'}} style={{
                color,
                ...lg && {fontSize, width },
                borderColor: color
              }}>
                <Link style={{
                  color
                }} to={item.to}>
                  {item.title}
                </Link>
              </li>
            )
          } else {
            return (
              <li key={index} {...index === 0 && {className: 'active'}} style={{
                color,
                ...lg && {fontSize, width },
                borderColor: color
              }}>
                  {item.title}
              </li>
            )
          }
      })}
    </div>
  )
}