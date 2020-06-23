import React, { FC, useState } from 'react';
import { Row, Col, Drawer, Badge } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Navbar.css';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { INavbarLink } from './navbar.interface';
import { IconSwitcher } from '../IconSwitcher/IconSwitcher';
import { Link } from 'react-router-dom';

export const Navbar: FC<{
  textColor: string,
  links: Array<INavbarLink>
  linkColor?: {
    active: string
    normal: string
  }
  active?: number
  cartCount?: number
}> = (props) => {

  const { textColor, links } = props;

  const { xl, md } = useBreakpoint();
  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);


  return (
    <div style={{
      zIndex: 99
    }}>
    {!xl && menuOpen 
      && <Drawer
          bodyStyle={{
            backgroundColor: '#111'
          }}
          closable={false}
          width='80%'
          placement='right'
          visible={menuOpen}
          onClose={() => {
            setMenuOpen(false)
          }}
        >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
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
                }}>
                  <Link to={item.to} style={{color: '#eee'}}>
                  {item.name}
                  </Link>
                </li>
              })
            }
          </ul>

          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <li style={{
                  cursor: 'pointer',
                  margin: '1em 0',
                  color: '#eee'}}
                >
                  <Badge count={props.cartCount}>
                  <Link to='/store/cart' style={{color: '#eee'}}>
                  cart
                  </Link>
                  </Badge>
                </li>
          </ul>
          
        </div>
      </Drawer>}
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
        fontFamily: 'Cormorant',
        fontWeight: 300,
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
              links.map((item, index) => {
                return <li key={index} style={{
                  cursor: 'pointer',
                  ...props.linkColor && {color: props.active === index ? props.linkColor.active : props.linkColor.normal}
                }}>
                  <Link to={item.to} style={{
                  ...props.linkColor && {color: props.active === index ? props.linkColor.active : props.linkColor.normal}
                }}>
                  {item.name}
                  </Link>
                </li>
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
              <li style={{
                  cursor: 'pointer',
                  ...props.linkColor && {color: props.active === 4 ? props.linkColor.active : props.linkColor.normal}
                  }}>
                    <Badge count={props.cartCount}>
                    <Link 
                      to='/store/cart' 
                      style={{
                      ...props.linkColor && {color: props.active === 4 ? props.linkColor.active : props.linkColor.normal}
                    }}>
                      cart
                    </Link>
                    </Badge>
                </li>
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
    </div>
  )
}