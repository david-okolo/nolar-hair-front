import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

export const ShippingCard: FC<{
  title: string
  description: string
  price: string
  checked?: boolean
  onClick?: () => void
}> = (props) => {


  const checkedStyle: React.CSSProperties = {
    border: '2px solid #4BB543',
    color: "20274D"
  }

  const uncheckedStyle: React.CSSProperties = {
    border: '2px solid #ddd',
    color: '#ddd'
  }

  const style = props.checked ? checkedStyle : uncheckedStyle;

  return (
    <Row style={{
      padding: '10px 20px 10px 0px',
      marginBottom: '5px',
      ...style
    }} onClick={props.onClick}>
      <Col span={4} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          {props.checked && <AiOutlineCheckCircle style={{color: '#4BB543', fontSize: '24px'}}/>}
      </Col>
      <Col span={20}>
        <Row justify='space-between'>
          <Col>
            <Title level={4} style={{color: style.color}}>{props.title}</Title>
          </Col>
          <Col>
            <Title level={4} style={{color: style.color}}>{props.price}</Title>
          </Col>
        </Row>
        <Row justify='start'>
          <Text style={{color: style.color}}>{props.description}</Text>
        </Row>
      </Col>
    </Row>
  )
}