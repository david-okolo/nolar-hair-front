import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Navbar.css';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { INavbarLink } from './navbar.interface';
import { FullScreenMenu } from './FullScreenMenu/FullScreenMenu';
import { IconSwitcher } from '../IconSwitcher/IconSwitcher';

export const Navbar: FC<{
  textColor: string,
  links: Array<INavbarLink>
}> = (props) => {

  const { textColor, links } = props;

  const { xl, md } = useBreakpoint();
  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);


  return (
    <>
    {!xl && menuOpen && <FullScreenMenu
      links={links}
      backgroundColor='black'
    ></FullScreenMenu>}
    <Row 
      align='middle' 
      style={{
        height: '132px',
        color: textColor
      }}
      justify='space-between'
    >
      <Col span={!md ? 8 : 4} style={{
        fontSize: (xl && '36px') || (md && '30px') || '24px',
        fontFamily: 'Cormorant Garamond',
        lineHeight: 3,
        textAlign: 'center',
        ...(menuOpen ? {color: '#eee'} : {})
      }}>nolar</Col>
      { xl && <Col span={16}>
        <Row 
          justify='center'
          align='middle'
        >
          <ul>
            {
              links.map(item => {
                return <li>{item.name}</li>
              })
            }
          </ul>
        </Row>
      </Col>}
      {
      <Col span={4}>
        <Row 
          justify='center'
          align='middle'
          >
           { xl ? 
           <ul>
              <li>cart</li>
            </ul>
            :
            <IconSwitcher
              icons={[
                <MenuOutlined
                  style={{
                    ...(menuOpen ? {color: '#eee'} : {})
                  }}
                  onClick={() => {
                    setMenuOpen(true)
                  }}
                />,
                <CloseOutlined
                  style={{
                    ...(menuOpen ? {color: '#eee'} : {})
                  }}
                  onClick={() => {
                    setMenuOpen(false)
                  }}
                />
              ]}
              toggler={menuOpen}
            />
            }
          </Row>
      </Col>
      }
    </Row>
    </>
  )
}