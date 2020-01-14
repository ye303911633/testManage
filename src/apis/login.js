import axios from '@/utils/myaxios.js'

export const goLogin = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
