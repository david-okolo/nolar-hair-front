import React, { FC, CSSProperties } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Row, Col } from 'antd';
import { ImageGrid } from '../ImageGrid/ImageGrid';


// tile images
import tileOne from '../../images/tiles/tile-1.jpg'
import tileTwo from '../../images/tiles/tile-2.jpg'
import tileThree from '../../images/tiles/tile-3.jpg'
import tileFour from '../../images/tiles/tile-4.jpg'

export const HomeAbout: FC<{}> = (props) => {
  const { xs, lg, xxl } = useBreakpoint();

  const xsColStyle: CSSProperties = {
    minHeight: '360px'
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

  return (
    <Row style={xxl ? xxlRowStyle : lg ? lgRowStyle : {
      margin: '0'
    }}>
      <Col xs={{span: 20, offset: 2}} sm={{span: 20, offset: 2}} lg={{span: 8, offset: 1, order: 1}} style={lg ? lgColStyle : {minHeight: '480px'}}>
        <Row justify={lg ? 'start' : 'center'} align='middle' style={{height: '100%'}}>
          <Col>
            <h2 style={{lineHeight: '72px'}}>Why Nolar?</h2>
            <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>We believe your hair deserves the best, and as such we can assure that with our curated regimens; Hair loss, baldness, scaling, itching, excessive oilness and other hair issues will be things of the past. Book a Consultation with a certified & registered Trichologist ( hair and scalp specialist) (member Int'l Association of Trichologists) and let's restore your confidence and bring your hair back to life...</p>
          </Col>
        </Row>
      </Col>
      <Col 
        xs={{span: 24}} 
        sm={{span: 24}} 
        lg={{span: 12, order: 0}} 
        style={{
          ...lg ? lgColStyle : xsColStyle
          }}>
            <Row justify={'center'} align='middle' style={{height: '100%'}}>
              <Col>
              <ImageGrid images={[tileOne, tileTwo, tileThree, tileFour]}></ImageGrid>
              </Col>
            </Row>
          </Col>
    </Row>
  )
}