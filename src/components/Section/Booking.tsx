import React, { FC, CSSProperties } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Row, Col } from 'antd';
import { BookingForm } from '../Form/BookingForm';

export const Booking: FC<{}> = (props) => {
  const { xs, sm, lg, xxl } = useBreakpoint();

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
      <Col xs={{span: 20, offset: 2}} sm={{span: 20, offset: 2}} lg={{span: 10, offset: 2}} style={lg ? lgColStyle : {minHeight: '300px'}}>
        <Row justify={lg ? 'start' : 'center'} align='middle' style={{height: '100%'}}>
          <Col>
            <h2 style={{lineHeight: xs ? '48px' : '72px'}}><span style={{color: '#4C273E'}}>Convinced?</span><br/> we bet you'd say that</h2>
            <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>Why not book a consultation with our amazing Nolar hair service</p>
          </Col>
        </Row>
      </Col>
      <Col 
        xs={{span: 24}} 
        sm={{span: 24}} 
        lg={{span: 10}} 
        style={{
          ...lgColStyle
          }}>
            <Row justify={'center'} align='middle' style={{height: '100%'}}>
              <Col span={24}>
                <BookingForm></BookingForm>
              </Col>
            </Row>
          </Col>
    </Row>
  )
}