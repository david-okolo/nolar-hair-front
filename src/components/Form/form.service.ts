import { backendUrl, DEFAULT_HEADERS } from '../../utils/constants';
import { emailRegex } from '../../utils/regex';

export const submitForm = async (name: string, email: string, service: string, time: string, paid: boolean) => {

  const body = {
    name,
    email,
    requestedService: service,
    requestedAppointmentTime: time,
    paidRequest: paid
  }

  const response = await fetch(backendUrl+'/booking', {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(body)
  });

  return await response.json();
}


export const getTimeSlots = async (service: string): Promise<{
  success: boolean,
  data: any,
  errors: Array<string>
}> => {
  const response = await fetch(backendUrl+'/booking/getTimeSlots', {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify({
      serviceName: service
    })
  })

  return await response.json();
}


export const validator = (name: string, email: string, service: string, time: string) => {
  const result: any = {
    status: true,
    errors: []
  }

  if(name.length < 4) {
    result.status = false
    result.errors.push('Name must be more than 4 characters');
  }

  if(!emailRegex.test(email)) {
    result.status = false
    result.errors.push('Please provide a valid email address');
  }

  if(service === '') {
    result.status = false
    result.errors.push('Please select a service')
  }

  if(time === '') {
    result.status = false
    result.errors.push('Please select an appointment time')
  }

  return result;
}
