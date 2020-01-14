import axios from '@/utils/myaxios.js'

/* 获取栏目列表
 */
export const getCategory = () => {
  return axios({
    url: '/post'
  })
}

/* 获取列表详情 */
export const postCategory = (params) => {
  return axios({
    method: 'post',
    url: '/post',
    params
  })
}
