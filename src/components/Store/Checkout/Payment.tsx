import React, { FC, useState } from 'react';
import { Row, Col, Button, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import { InputBar } from '../../Form/InputBar';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { emailRegex } from '../../../utils/regex';
import { backendUrl, DEFAULT_HEADERS } from '../../../utils/constants';
import { CartProduct } from '../store.interface';

export const Payment: FC<{
  // setReference: Dispatch<SetStateAction<string>>,
  selectedProducts: CartProduct[]
}> = (props) => {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

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

    const { data: { paymentUrl } } = await response.json();

    window.open(paymentUrl);
    // props.setReference(reference);
  }

  return (
    <Row gutter={[{}, 24]}>
      <Col span={24}>
        <Text>Payment Method</Text>
      </Col>
      <Col span={24}>
        <Space>
          <Button style={{
            border: '2px solid #4BB543',
            fontWeight: 600
          }}>Paystack</Button>
          <Button disabled>Coming Soon</Button>
        </Space>
      </Col>
      <Col span={24}>
      <InputBar prefix={<AiOutlineUser></AiOutlineUser>} value={name} label={{name: 'Full Name', key:'name'}} color='#20274D' type='text' onChange={(e) => {
        setName(e.target.value)
      }}></InputBar>
      <InputBar prefix={<AiOutlineMail></AiOutlineMail>} value={email} label={{name: 'Email', key:'email'}} color='#20274D' type='email' onChange={(e) => {
        setEmail(e.target.value)
      }}></InputBar>
      </Col>
      <Col span={24}>
        <Row justify='center'>
          <Col>
            <Button 
              onClick={() => {
                getLink(email, name, props.selectedProducts);
              }}
              {...(!emailRegex.test(email) || props.selectedProducts.length === 0) && {disabled: true}}
              style={{fontWeight: 600}} type='primary'>Confirm</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}