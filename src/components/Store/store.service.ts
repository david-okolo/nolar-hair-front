import { backendUrl, DEFAULT_HEADERS } from '../../utils/constants'

export const getStoreList = async () => {
  const response = await fetch(backendUrl+'/store/list', {
    headers: DEFAULT_HEADERS,
    method: 'GET'
  });

  return await response.json()
}