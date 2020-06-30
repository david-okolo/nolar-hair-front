import React, { FC, useState } from 'react';
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom';
import { Steps, Row, Col, Divider } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Shipping } from './Shipping';
import { CartProduct } from '../store.interface';
import { Payment } from './Payment';
import { PaymentVerification } from '../PaymentVerification';

const { Step } = Steps;

export const Checkout: FC<{
  selectedProducts: CartProduct[]
  price: number
}> = (props) => {

  const { xs } = useBreakpoint();

  const { path } = useRouteMatch();

  const location = useLocation();

  let currentStep;

  switch (location.pathname.split('/')[4]) {
    case 'payment':
      currentStep = 1
      break;
    case 'confirm':
      currentStep = 2
      break;
    default:
      currentStep = 0
      break;
  }

  const [ price, setPrice ] = useState<number>(props.price);

  return (
    <Row justify='center'style={{
      minHeight: "480px",
      padding: '48px'
    }}>
      <Col span={20}>
        <h2>Checkout</h2>
        <Divider></Divider>
      </Col>
      <Col span={xs ? 24 : 16}>
        <Row justify='start'>
          <Col offset={2} span={20}>
            <Steps progressDot current={currentStep} direction={xs ? 'vertical': 'horizontal'} size="small" style={{
              width: "80%"
            }}>
              <Step title="Shipping" description=""></Step>
              <Step title="Payment" description=""></Step>
              <Step title="Confirmation" description=""></Step>
            </Steps>
          </Col>
          <Divider></Divider>
          <Col offset={2} span={20}>
            <Switch>
              <Route exact path={path}>
                <Shipping price={price} setPrice={setPrice}></Shipping>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment  selectedProducts={props.selectedProducts}></Payment>
              </Route>
              <Route path={`${path}/confirm/:ref`}>
                <PaymentVerification></PaymentVerification>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Col>
      {!xs && <Col span={8}>

      </Col>}

    </Row>
  )
}