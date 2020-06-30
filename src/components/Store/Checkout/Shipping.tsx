import React, { FC, Dispatch, SetStateAction } from 'react';
import { Row, Col, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import { ShippingCard } from './ShippingCard';
import { useHistory } from 'react-router-dom';

export const Shipping: FC<{
  price: number
  setPrice: Dispatch<SetStateAction<number>>
}> = (props) => {


  const { push } = useHistory();


  return (
    <Row gutter={[{}, 24]}>
      <Col span={24}>
        <Text>Delivery Option</Text>
      </Col>
      <Col span={24}>
          <ShippingCard 
            onClick={() => {
              props.setPrice(props.price + 0)
            }}
            checked
            title='Collect at Store' 
            description='Visit a store to collect items' 
            price={0..toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})}
          />
          <ShippingCard 
            title='Coming Soon' 
            description='In due time' 
            price={0..toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})}
          />
      </Col>
      <Col span={24}>
        <Row justify='center'>
          <Col>
            <Button 
              type='primary' 
              style={{
                backgroundColor: '#20274D',
                fontWeight: 600,
                minWidth: '120px'
              }}
              onClick={() => {
                push('/store/cart/checkout/payment')
              }}
              >Pay {props.price.toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})}</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}