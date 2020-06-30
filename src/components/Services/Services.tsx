import React, { FC } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { links } from '../../utils/constants';
import { Footer } from '../Footer/Footer';
import { Row, Col } from 'antd';
import { CustomSection } from '../CustomSection';

import loss from '../../images/services/loss.jpg'
import product from '../../images/services/product.jpg'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { ImageGrid } from '../ImageGrid/ImageGrid';

// tile images
import tileOne from '../../images/tiles/tile-1.jpg'
import tileTwo from '../../images/tiles/tile-2.jpg'
import tileThree from '../../images/tiles/tile-3.jpg'
import tileFour from '../../images/tiles/tile-4.jpg'

export const Services: FC<{}> = (props) => {

  const { xs } = useBreakpoint();

  return (
    <>
    <Navbar textColor='#20274D' links={links} linkColor={{
      normal: '#aaa',
      active: '#20274D'
    }} active={1}/>
    <Row justify='center'>
      <Col span={20}>
        <h2 style={{color: '#20274D'}}>Services</h2>
      </Col>
    </Row>
    <CustomSection 
      invert
      text={
      <>
        <h4 style={{lineHeight: 1.6}}>Hairloss analysis & Restoration</h4>,
        <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>We offer a wide range of services ranging<br/> from hair loss consultantions to styling,<br/> braiding, supplements and equipments.<br/> Whatever your hair needs are we’ll be<br/> happy to help.</p>
      </>
      }
      image={<img src={loss} width='100%' alt='woman suffering hair loss'></img>}
      ></CustomSection>

    <CustomSection
      text={
      <>
        <h4 style={{lineHeight: 1.6}}>Hairloss analysis & Restoration</h4>,
        <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>Nolar in addition to Hairloss Consultation & Treatment also offers other hair services with competent and professionals in attendance for: </p>
        <ul style={{
          display: 'inline',
          listStyleType: 'disc'
        }}>
          <li style={{textTransform: 'capitalize', fontSize: xs ? '14px' : '16px'}}>Styling</li>
          <li style={{textTransform: 'capitalize', fontSize: xs ? '14px' : '16px'}}>Braiding</li>
          <li style={{textTransform: 'capitalize', fontSize: xs ? '14px' : '16px'}}>Barbing</li>
          <li style={{textTransform: 'capitalize', fontSize: xs ? '14px' : '16px'}}>Nails etc</li>
        </ul>
        <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>Quality hair products & supplements are also available for our clients hair wellness.</p>
      </>
      }
      image={<img src={product} width='100%' alt='woman getting her hair done'></img>}
      ></CustomSection>

    <CustomSection
      invert
      text={
      <>
        <h4 style={{lineHeight: 1.6}}>Hair-Ducation & Training</h4>,
        <p style={{lineHeight: 2, fontSize: xs ? '14px' : '16px'}}>Knowledge is power. We offer training and educate the public on how best to look after their hair and when to seek the help of a professional for their hair problems. We also offer training to hair practitioners on the latest happenings in the hair industry and business ethics.</p>
      </>
      }
      image={<ImageGrid images={[tileOne, tileTwo, tileThree, tileFour]}></ImageGrid>}
      ></CustomSection>
    
    
    <Footer></Footer>
    </>
  )
}