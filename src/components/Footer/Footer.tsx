import React, { FC } from 'react'
import { Row, Col } from 'antd'
import './Footer.less';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { SingleInputBar } from '../Form/SingleInputBar';

export const Footer: FC = () => {
    const { lg, xs } = useBreakpoint();
  return (
        <Row justify={'center'} align='middle' className='footer' style={{minHeight: '720px'}}>
            <Col xs={22} lg={12}>
                <Row justify={lg ? 'center' : 'start'}>
                    <Col>
                        <h2 className='footer-h2'>Subscribe<br/><span style={{color: '#9D4747', textTransform: 'lowercase'}}>to our newsletter</span></h2>
                        <p className='footer-p'>For info on deals hair-care tips and new product arrivals</p>
                        <SingleInputBar buttonText='Submit' secondary placeholder='me@email.com' size={xs ? '36px' : '48px' } onSubmit={console.log} style={{
                            margin: '48px 0'
                        }}></SingleInputBar>
                    </Col>
                </Row>
            </Col>
            <Col xs={22} lg={12}> 
                <div className='footer-links'>
                    <div className='footer-link-section'>
                        <h3 className='footer-h3'>Services</h3>
                        <ul>
                            <li>Hair loss consultation/ Hair management</li>
                            <li>Hair wellness</li>
                            <li>Hair-ducation (Hair Training)</li>
                            <li>Hair products and supplements</li>
                        </ul>
                        <ul>
                            <li>Hair Styling</li>
                            <li>Barbing</li>
                            <li>Braiding</li>
                            <li>Nails</li>
                        </ul>
                    </div> 
                    <div className='footer-link-section'>
                        <h3 className='footer-h3'>Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Values</li>
                            <li>Our Office</li>
                        </ul>
                    </div>
                    <div className='footer-link-section'>
                        <h3 className='footer-h3'>Contact</h3>
                        <ul>
                            <li>+234 810 765 4312</li>
                            <li>info@nolarhair.com</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    )
} 