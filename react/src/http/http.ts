import HttpFetch from 'js-http-fetch'
import {Loading} from '@/common/utils'
import {ExtHttpFetchConfig} from '@/types/ext-types'
import {Toast} from 'antd-mobile'

const http = HttpFetch.create({
  timeout: 10000
})
let total = 0
http.interceptors.request.use<ExtHttpFetchConfig>(config => {
  total++
  if (!config.noLoading && Loading.closed) Loading.open()
  return config
})
http.interceptors.response.use(data => {
  if (--total === 0 && !Loading.MANUAL) Loading.close()
  return data
}, reason => {
  if (--total === 0) Loading.close() // 网络原因应该关闭loading
  Toast.show({icon: 'fail', content: reason.message || '网络异常'})
  return Promise.reject(reason)
})
export default http
