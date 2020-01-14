import axios from '@/utils/myaxios.js'

/* 获取栏目列表
 */
export const getCategory = () => {
  return axios({
    url: '/post'
  })
}
