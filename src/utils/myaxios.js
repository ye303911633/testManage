import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
export default axios
