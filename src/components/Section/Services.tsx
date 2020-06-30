import React, { FC, CSSProperties } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Row, Col } from 'antd';
import { MenuCard } from '../MenuCard/MenuCard';


// service images
import barbing from '../../images/services/barbing.jpg';
import consultation from '../../images/services/consultation.jpg';
import wellness from '../../images/services/wellness.jpg'

export const Services: FC<{}> = (props) => {
  const { xs, sm, lg, xxl } = useBreakpoint();

  const xsColStyle: CSSProperties = {
    minHeight: '480px'
  }

  const lgColStyle: CSSProperties = {
    minHeight: '720px'
  }

  const xxlRowStyle: CSSProperties = {
    margin: '0 0 240px 0'
  }

  const lgRowStyle: CSSProperties = {
    margin: '0 0 120px 0'
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
      name: 'Hair loss analysis and Restoration',
      image: servicesImageSet.consultation
    },
    {
      name: 'Hair-Ducation (Hair Training)',
      image: servicesImageSet.barbing
    },
    {
      name: 'Hair Service, Products and Supplements',
      image: servicesImageSet.wellness
    }
  ];

  return (
    <Row style={xxl ? xxlRowStyle : lg ? lgRowStyle : {
      margin: '0'
    }}>
      <Col xs={{span: 20, offset: 2}} sm={{span: 20, offset: 2}} lg={{span: 8, offset: 2}} style={lg ? lgColStyle : {minHeight: '360px'}}>
        <Row justify={lg ? 'start' : 'center'} align='middle' style={{height: '100%'}}>
          <Col>
            <h2 style={{lineHeight: '72px'}}>Services</h2>
            <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>We offer a wide range of services ranging<br/> from hair loss consultantions to styling,<br/> braiding, supplements and equipments.<br/> Whatever your hair needs are we’ll be<br/> happy to help.</p>
          </Col>
        </Row>
      </Col>
      <Col 
        xs={{span: 24}} 
        sm={{span: 24}} 
        lg={{span: 14}} 
        style={{
          backgroundColor: '#4C273E',
          ...lg ? lgColStyle : xsColStyle
          }}>
            <Row justify={'center'} align='middle' style={{height: '100%'}}>
              <Col span={22} offset={1} style={{
                display: 'flex',
                alignItems: 'flex-start',
                overflowX: 'auto',
                color: 'white'
              }}>
                {serviceList.map((item, index) => {
                  return (
                    <MenuCard key={index} image={item.image} cardTitle={item.name}></MenuCard>
                  )
                })}
              </Col>
            </Row>
          </Col>
    </Row>
  )
}