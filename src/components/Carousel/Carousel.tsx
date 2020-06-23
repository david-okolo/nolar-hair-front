import React, { FC, useRef, useState } from 'react';
import { CarouselIndicator } from './CarouselIndicator/CarouselIndicator';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Row, Col } from 'antd';

export const Carousel: FC<{
  images: Array<string>
}> = ({images, children}) => {

  const { lg } = useBreakpoint();
  const [ currentSlide, setCurrentSlide ] = useState(0);

  const ref = useRef<HTMLDivElement>();

  const handleClick = (value: number) => {
    const indicators = ref.current?.children;
    for(let i = 0; i < (indicators?.length || 0); i++) {
      indicators?.item(i)?.classList.remove('indicator-tab-active')
    }
    indicators?.item(value)?.classList.add('indicator-tab-active')

    setCurrentSlide(value);
  }

  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      transition: 'background-image 0.5s ease-in-out',
      backgroundImage: `url(${images[currentSlide]})`,
      backgroundPositionX: !lg ? 'center' : 'right',
      backgroundPositionY: 'initial',
      backgroundSize: 'cover'
    }}>
      {children}
      <Row style={{
        display: 'flex',
        width: '100%',
        flex: 1
      }}>
        <Col span={18} offset={3} style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            height: '150px'
          }}>
            <h1 style={{
              margin: 0,
              padding: 0,
              fontFamily: 'Cormorant Garamond',
              color: '#fff'
            }}>Your hair made beautiful</h1>
          </div>
          <CarouselIndicator count={images.length} handleClick={handleClick} ref={ref}></CarouselIndicator>
        </Col>
      </Row>
    </header>
  )
}