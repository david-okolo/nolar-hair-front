import React, { FC, useState, useEffect } from 'react';
import { Row, Col, Checkbox, Modal } from 'antd';
import { InputBar } from './InputBar';
import { AiOutlineMail, AiOutlineUser, AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import { SelectBar } from './SelectBar';
import { Button } from '../Button/Button';
import { submitForm, validator, getTimeSlots } from './form.service';

export const BookingForm: FC = (props) => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('')
  const [ service, setService ] = useState('')
  const [ date, setDate ] = useState('')
  const [ time, setTime ] = useState('')
  const [ paid, setPaid ] = useState(false);
  const [ isValid, setIsValid ] = useState(false);

  const [ dateOptions, setDateOptions ] = useState<{[x: string]: Array<number>}>({});

  const clearForm = () => {
    setName('')
    setEmail('')
    setService('')
    setDate('')
    setTime('')
    setPaid(false)
    setDateOptions({})
  }

  // To check validity on state change
  useEffect(() => {
    if (validator(name, email, service, time).status) {
      setIsValid(true)
    }
  },[name, email, service, time])


  useEffect(() => {
    if(service !== '') {
      getTimeSlots(service).then(response => {
        if(response.success) {
          setDateOptions(response.data)
        }
      })
    }
  }, [service])

  return (
    <> 
      {}
      <Row justify='center' style={{
        width: '100%'
      }}>
        <Col span={22}>
          <InputBar
            value={name}
            prefix={<AiOutlineUser/>}
            color='#20274D' 
            label={{
              key: 'name',
              name: 'Full Name'
            }}
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value)
            }}
            />

          <InputBar
            value={email}
            prefix={<AiOutlineMail/>}
            color='#20274D'
            label={{
              key: 'email',
              name: 'Email'
            }}
            type='email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
            />

            <SelectBar
              value={service}
              color='#20274D'
              prefix={<GrServices/>}
              options={[
                {
                  value: '',
                  name: 'Select a service'
                },
                {
                  value: 'hair styling',
                  name: 'Hair Styling'
                }
              ]}
              label={{
                key: 'requestedService',
                name: 'Service'
              }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setService(e.target.value)
              }}
            />

            <SelectBar
              value={date}
              {...(service === '' || Object.keys(dateOptions).length === 0)  && {disabled: true}}
              color='#20274D'
              prefix={<AiOutlineCalendar/>}
              options={[
                {
                  value: '',
                  name: 'Select a convenient date'
                },
                ...Object.keys(dateOptions).map((item) => {
                  return {
                    value: item,
                    name: new Date(Number(item)).toDateString()
                  }
                })
              ]}
              label={{
                key: 'requestedAppointmentDay',
                name: 'Appointment Day'
              }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setDate(e.target.value)
              }}
            />

            <SelectBar
              value={time}
              {...(date === '')  && {disabled: true}}
              color='#20274D'
              prefix={<AiOutlineClockCircle/>}
              options={[
                {
                  value: '',
                  name: 'Select a convenient time'
                },
                ...(dateOptions[date]) ? dateOptions[date].map((item) => {
                  return {
                    value: item,
                    name: new Date(item).toLocaleTimeString()
                  }
                }) : []
              ]}
              label={{
                key: 'requestedAppointmentTime',
                name: 'Appointment Time'
              }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTime(e.target.value)
              }}
            />
            <Checkbox style={{color: '#20274D'}} checked={paid} onChange={(e) => {
              setPaid(e.target.checked)
              }}>Secure reservation (costs 2000 Naira)</Checkbox>

            <Button style={{width: '100%', marginTop: '20px', ...!isValid && {backgroundColor: 'gray'}}} onClick={() => {
              if(isValid) {
                submitForm(name, email, service, time, paid).then(response => {
                  console.log(response)
                  if(response.success) {
                    Modal.success({
                      content: (
                        <div>
                          <h4>Your booking has been reserved successfully.</h4>
                          {response.data.payment && <p>You requested a secured reservation. Pay on paystack <a href={response.data.paymentUrl}>link</a></p>}
                          <p>All details have been sent to your email. Thanks for choosing Nolar.</p>
                        </div>
                      )
                    })
                  }

                  clearForm()
                })
              }
            }} text='Save and Proceed'></Button>
        </Col>
      </Row>
    </>
  )
}