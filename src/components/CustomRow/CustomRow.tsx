import React, { FC, ReactElement } from 'react';
import { Row, Col } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

export const CustomRow: FC<{
  columns: Array<{
    element: ReactElement,
    columnStyle: {}
  }>
}> = (props) => {

  const { xs, md } = useBreakpoint();

  return (
    <Row justify='center' align='middle' gutter={[{}, {xs: 64}]} style={{
      minHeight: '720px',
      ...md && {margin: '120px 0'}
    }}>
      {props.columns.map((item, index) => {
        return (
          <Col key={index} xs={24} lg={12} style={{...item.columnStyle}}>
            <Row justify='center' align='middle'>
            <Col xs={22} lg={24} style={{
              display: 'flex',
              justifyContent: index === 1 ? 'flex-start' : 'center',
              overflow: 'auto',
              ...md && {minHeight: '720px', alignItems: 'center'},
              ...xs && {minHeight: '360px', alignItems: 'center'},
            }}>{item.element}</Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}