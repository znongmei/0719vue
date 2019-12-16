//对axio进行2次封装一个能发ajax请求的函数
import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui'

const instance = axios.create({
  // baseURL: 'http://localhost:4000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 // 4. 配置请求超时的时间
})
// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 显示请求loading
  Indicator.open()
  // 3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏请求loading
    Indicator.close()
    // 2. 异步请求成功的数据不是response, 而是response.data
    return response.data
  },
  error => {
    // 隐藏请求loading
    Indicator.close()
    // 1. 统一处理请求异常
    alert('请求出错: ' + error.message)
    return new Promise(() => {}) // 返回一个pending状态的promise => 中断promie链
  }
)

export default instance
