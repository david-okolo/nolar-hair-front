import React from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

import { ImageGrid } from './components/ImageGrid/ImageGrid';
import { services, whyNolar } from './AppText';

// background images
import bgOneLarge from './images/bg-1.jpg'
import bgOneMedium from './images/bg-1-480.jpg'
import bgTwo from './images/bg-2.jpg';

// service images
import barbing from './images/services/barbing.jpg';
import consultation from './images/services/consultation.jpg';
import wellness from './images/services/wellness.jpg'

// store images
import ehs from './images/products/store-1.jpg';
import hgp from './images/products/store-2.jpg'; 
import hrp from './images/products/store-3.jpg';
import cleanser from './images/products/store-4.jpg';

// tile images
import tileOne from './images/tiles/tile-1.jpg'
import tileTwo from './images/tiles/tile-2.jpg'
import tileThree from './images/tiles/tile-3.jpg'
import tileFour from './images/tiles/tile-4.jpg'
import { Article } from './components/Article/Article';


import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Footer } from './components/Footer/Footer';
import { Carousel } from './components/Carousel/Carousel';
import { Navbar } from './components/Navbar/Navbar';
import { CustomRow } from './components/CustomRow/CustomRow';
import { MenuCard } from './components/MenuCard/MenuCard';
import { MenuNav } from './components/MenuNav/MenuNav';
import { BookingForm } from './components/Form/BookingForm';
import { links } from './utils/constants';

function Home() {

  const { xxl, md, xs } = useBreakpoint();

  const bgSrcSet = {
    md: [bgOneMedium, bgTwo],
    lg: [bgOneLarge, bgTwo]
  }

  const servicesImageSet = {
    barbing: {
      data: barbing,
      alt: 'Man getting a haircut'
    },
    consultation: {
      data: consultation,
      alt: 'Photo of a hair salon chair'
    },
    wellness: {
      data: wellness,
      alt: 'beautiful woman with straight hair'
    }
  }

  const serviceList = [
    {
      name: 'Hair Consultation / Hair Management',
      image: servicesImageSet.consultation
    },
    {
      name: 'Hair-Ducation (Hair Training)',
      image: servicesImageSet.barbing
    },
    {
      name: 'Hair Wellness',
      image: servicesImageSet.wellness
    }
  ];

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
    <CustomRow 
      columns={[
      {
        element: <ImageGrid images={[tileOne, tileTwo, tileThree, tileFour]}></ImageGrid>,
        columnStyle: {}
      },
      {
        element: <Article heading='Why Nolar?' paragraph={whyNolar}></Article>,
        columnStyle: {}
      }
      ]}
    />
    <CustomRow columns={[
      {
        element: <Article heading='Services' paragraph={services}></Article>,
        columnStyle: {}
      },
      {
        columnStyle: {
          backgroundColor: '#4C273E',
          color: 'white'
        },
        element: <>
          {serviceList.map((item, index) => {
            return (
              <MenuCard key={index} image={item.image} cardTitle={item.name}></MenuCard>
            )
          })}
        </>
      }
    ]}/>

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
          padding: '0 60px 20px 0'
        }}>
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
      </Col>
    </Row>
    <CustomRow columns={[
      {
        element: <Article heading="Convinced, we bet you'd say that" paragraph='Why not book a consultation with our amazing Nolar cair service'></Article>,
        columnStyle: {}
      },
      {
        element: <BookingForm/>,
        columnStyle: {}
      }
    ]}>

    </CustomRow>
    <Footer></Footer>
    </>
  );
}

export default Home;
