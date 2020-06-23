import React, { FC, useState } from 'react'
import { Row, Col, Divider, Button, Drawer, Progress } from 'antd'
import { CartProduct } from './store.interface'
import { MenuRow } from '../MenuRow/MenuRow'
import Text from 'antd/lib/typography/Text'
import { useHistory, Switch, Route, useRouteMatch } from 'react-router-dom'
import { InputBar } from '../Form/InputBar'
import { AiOutlineMail, AiOutlineArrowLeft } from 'react-icons/ai'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { emailRegex } from '../../utils/regex'
import { backendUrl, DEFAULT_HEADERS } from '../../utils/constants'

export const Cart: FC<{
  clearCart: () => void
  selectedProducts: CartProduct[],
  handleRemove: (id: number) => void,
  changeCount: (value: number, index: number) => void
}> = (props) => {

  const { xl } = useBreakpoint();
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ reference, setReference ] = useState('');
  const [ verifyBar, setVerifyBar ] = useState(0);
  const [ verificationStat, setVerificationStat ] = useState(false);

  const { push } = useHistory();
  const { path } = useRouteMatch();

  const calculateTotal = (selectedProducts: CartProduct[]) => {
    return selectedProducts.reduce((acc, cur) => {
      return acc + (cur.price * ((100 - cur.discount)/100) * cur.count)
    }, 0)
  }

  const getLink = async (email: string, name: string, selectedProducts: CartProduct[]) => {
    const body = {
      email,
      name,
      selectedProducts
    }

    const response = await fetch(backendUrl+'/store/pay', {
      headers: DEFAULT_HEADERS,
      method: 'POST',
      body: JSON.stringify(body)
    });

    const { data: { paymentUrl, reference } } = await response.json();

    window.open(paymentUrl);
    setReference(reference);
  }

  const verify = async (reference: string) => {
    setVerificationStat(true)
    setVerifyBar(10);
    const response = await fetch(backendUrl+'/store/verify', {
      headers: DEFAULT_HEADERS,
      method: 'POST',
      body: JSON.stringify({
        reference
      })
    });

    const data = await response.json();

    if(data.success) {
      props.clearCart()
      setVerifyBar(100)
      setTimeout(() => {
        push('/store')
      }, 1000)
    } else {
      setVerificationStat(false)
      setVerifyBar(100)
      setTimeout(() => {
        setVerifyBar(0)
      }, 1000)
    }
  }

  return (
    <Switch>
      <Route exact path={path}>
        <>
        <Row justify='center' style={{
          minHeight: '480px',
          color: '#20274D',
          padding: '48px 0'
        }}>
          <Col span={20}>
            <h2 style={{color: '#20274D'}}>Your Cart</h2>
            <Divider style={{
              borderColor: '#20274d'
            }}></Divider>
            <div style={{
              margin: '24px 0 0 0',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto'
            }}>
              {props.selectedProducts.map((item, index) => {
                  return (
                    <MenuRow 
                      availableCount={item.availableCount} 
                      setValue={(value: number) => {
                        props.changeCount(value, index)
                      }} 
                      key={index} 
                      product={item} 
                      onDelete={props.handleRemove}
                    />
                  )
                })}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: '24px',
                width: '100%',
                fontSize: xl ? '16px' : '12px'
              }}>
                <Text>Total</Text>
                <Text style={{
                  fontSize: xl ? '36px' : '24px',
                  padding: '0 12px'
                }}>
                  {calculateTotal(props.selectedProducts).toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})}
                </Text>
              </div>
            </div>
          </Col>
          <Col span={20}>
              <Row justify='space-between' align='middle'>
                <Col>
                  <AiOutlineArrowLeft/>
                  <Button 
                    type='text' 
                    style={{
                      fontWeight: 600
                    }}
                    onClick={() => {
                      push('/store')
                    }}
                  >
                    Continue Shopping</Button>
                </Col>
                <Col>
                  <Button 
                    style={{
                      backgroundColor: '#20274d',
                      color: '#fff',
                      fontWeight: 600
                    }}
                    onClick={() => {
                      setVisible(true)
                    }}
                  >Checkout</Button>
                </Col>
              </Row>
          </Col>
        </Row>
        {
          <Drawer
            height={480}
            placement='bottom'
            closable={false}
            onClose={() => {
              setVisible(false)
            }}
            visible={visible}
          >
            <Row justify='center' style={{
              color: '#20274D',
              padding: '48px 0'
            }}>
              <Col xs={24} lg={12}>
              <InputBar prefix={<AiOutlineMail></AiOutlineMail>} value={name} label={{name: 'Full Name', key:'name'}} color='#20274D' type='text' onChange={(e) => {
                  setName(e.target.value)
                }}></InputBar>
                <InputBar prefix={<AiOutlineMail></AiOutlineMail>} value={email} label={{name: 'Email', key:'email'}} color='#20274D' type='email' onChange={(e) => {
                  setEmail(e.target.value)
                }}></InputBar>

              <Row justify='center'>
                <Col>
                {(!verifyBar && reference === '') && <Button 
                  {...(!emailRegex.test(email) || props.selectedProducts.length === 0) && {disabled: true}} 
                  style={{
                    backgroundColor: '#20274D',
                    color: '#fff',
                    fontWeight: 600,
                    height: '48px'
                  }}
                  onClick={() => {
                    getLink(email, name, props.selectedProducts);
                  }}
                  >Pay {calculateTotal(props.selectedProducts).toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})} with Paystack</Button>}
                  {(!verifyBar && reference !== '') && <Button style={{
                    backgroundColor: '#fff',
                    color: '#20274d',
                    fontWeight: 600,
                    height: '48px'
                  }} onClick={() => {
                    verify(reference)
                  }}>Verify</Button>}
                  {
                    !!verifyBar && <Progress style={{marginTop: '12px'}} type='circle' percent={verifyBar} width={80} {...!verificationStat && {status: 'exception'}}></Progress>
                  }
                </Col>
              </Row>
              </Col>
            </Row>
          </Drawer>
        }
        </>
      </Route>
    </Switch>
  )
}