import React, { FC } from 'react';
import { Row, Col } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

export const MenuCard: FC<{
  image: {
    data: string
    alt: string
  }
  cardTitle: string
  extra?: Array<any>
}> = ({image, extra, cardTitle}) => {

  const { lg } = useBreakpoint();

  let width = '224px'
  let height = '304px'
  let fontSize = '14px';

  if (lg) {
    width = '336px'
    height = '456px'
    fontSize = '16px';
  }

  return (
    <div style={{
      margin: '0 16px',
      width,
      fontSize
    }}>
      <figure>
        <img src={image.data} alt={image.alt} width={width} height={height}/>
        <figcaption style={{margin: '10px 0 0 0'}}>{cardTitle}</figcaption>
      </figure>
      {extra && <Row justify="space-between" align="middle">
        {extra.map((item, index) => {
          return (
            <Col key={index}>{item}</Col>
          )
        })}
      </Row>}
    </div>
  )
}