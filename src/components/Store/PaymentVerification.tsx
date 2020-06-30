import React, { FC, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { backendUrl, DEFAULT_HEADERS } from '../../utils/constants';
import { Result, Button } from 'antd';
import { ResultProps } from 'antd/lib/result';

export const PaymentVerification: FC<{}> = (props) => {

  const { ref } = useParams();
  const { push } = useHistory();

  const [ status, setStatus ] = useState<boolean>(false);

  const verify = async (reference: string) => {

    const response = await fetch(backendUrl+'/store/verify', {
      headers: DEFAULT_HEADERS,
      method: 'POST',
      body: JSON.stringify({
        reference
      })
    });

    const data = await response.json();

    if(data.success) {
      setStatus(true);
    }
  }

  useEffect(() => {
    verify(ref)
  })

  const pageStatus = status ? "success" : "error";
  const title = status ? "Successfully purchased" : "Payment Verification Error";
  const subTitle = `Reference number: ${ref}. An email containing further details would be sent to you. Feel free to contact us`

  return (
    <Result
      status={pageStatus}
      title={title}
      subTitle={subTitle}
      extra={[
        <Button 
          key="buy" 
          onClick={() => {
            push('/store')
          }}
        >Back to Store</Button>,
      ]}
    />
  )
}