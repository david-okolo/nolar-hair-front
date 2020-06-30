import React from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

// background images
import bgOneLarge from './images/bg-1.jpg'
import bgOneMedium from './images/bg-1-480.jpg'
import bgTwo from './images/bg-2.jpg';

// store images
import ehs from './images/products/store-1.jpg';
import hgp from './images/products/store-2.jpg'; 
import hrp from './images/products/store-3.jpg';
import cleanser from './images/products/store-4.jpg';


import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Footer } from './components/Footer/Footer';
import { Carousel } from './components/Carousel/Carousel';
import { Navbar } from './components/Navbar/Navbar';
import { MenuCard } from './components/MenuCard/MenuCard';
import { MenuNav } from './components/MenuNav/MenuNav';
import { links } from './utils/constants';
import { HomeServices } from './components/Section/HomeServices';
import { HomeAbout } from './components/Section/HomeAbout';
import { Booking } from './components/Section/Booking';

function Home() {

  const { xxl, md, xs } = useBreakpoint();

  const bgSrcSet = {
    md: [bgOneMedium, bgTwo],
    lg: [bgOneLarge, bgTwo]
  }

  const storeItems = [
    {
      name: 'Exfoliating Hair Shampoo',
      image: ehs,
      price: '39.99 USD'
    },
    {
      name: 'Hair Growth Pack',
      image: hgp,
      price: '39.99 USD'
    },
    {
      name: 'Hair Restore Pack',
      image: hrp,
      price: '39.99 USD'
    },
    {
      name: 'Cleanser',
      image: cleanser,
      price: '39.99 USD'
    }
  ]

  

  return (
    <>
    <Carousel images={xs ? bgSrcSet.md : bgSrcSet.lg}>
      <Navbar links={links} textColor='#fff' linkColor={{
        normal: '#fff',
        active: 'brown'
      }}></Navbar>
    </Carousel>
    <HomeAbout/>
    <HomeServices/>

    <Row style={{
      minHeight: '480px',
      backgroundColor: "#20274D",
      color: 'white',
      padding: '48px 0'
    }}>
      <Col style={{
        ...xs && {
          padding: '0 0 0 48px'
        },
        ...md && {
          padding: '0 0 0 120px'
        },
        ...xxl && {
          padding: '0 0 0 240px'
        }
      }}>
        <h2 style={{color: 'white'}}>Shop Our Products</h2>
        <MenuNav color='white' links={[
          {
            title: 'Featured'
          },
          {
            title: 'Visit Store',
            to: '/store'
          }
        ]}></MenuNav>
        <div style={{
          margin: '24px 0 0 0',
          display: 'flex',
          overflow: 'auto',
          padding: '0 60px 0 0'
        }}>
          <div style={{padding: '0 0 120px 0', display: 'flex'}}>
          {storeItems.map((item, index) => {
              return (
                <MenuCard 
                  key={index}
                  image={{
                    data: item.image,
                    alt: ''
                  }}
                  cardTitle={item.name}
                  extra={[
                  <Text style={{color: 'white', fontWeight: 300}}>{item.price}</Text>,
                  <Text style={{color: 'white', fontWeight: 300, cursor: 'pointer'}}>Add To Cart</Text>
                  ]}
                ></MenuCard>
              )
            })}
          </div>
        </div>
      </Col>
    </Row>
    <Booking></Booking>
    <Footer></Footer>
    </>
  );
}

export default Home;
