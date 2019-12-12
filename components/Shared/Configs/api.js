import axios from 'axios'
import { getToken } from './profile'

const api = axios.create({ baseURL: `https://ancient-dusk-81972.herokuapp.com/` })

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
export default api