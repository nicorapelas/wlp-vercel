import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://coups-1889de9f2619.herokuapp.com',
})

console.log('API Base URL:', instance.defaults.baseURL)

instance.interceptors.request.use(
  async (config) => {
    console.log('Request config:', config.baseURL)

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default instance
