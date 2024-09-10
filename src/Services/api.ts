import axios, { type InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const userData = localStorage.getItem(
    'ClinicaCorpoeMente:ClinicaCorpoeMente1.0',
  )
  const token = userData !== null && JSON.parse(userData).token

  if (token === true) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api