import axios from 'axios'

const api = axios.create({
  baseURL: 'https://central-de-aco.vercel.app/',
})

export default api