//对axio进行2次封装一个能发ajax请求的函数
import axios from "axios";
import qs from "qs"


const instance=axios.create({
  //不能写localhost地址名，会出现错误
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 // 配置请求超时的时间
})

//添加请求拦截器

instance.interceptors.request.use((config)=>{
console.log('req interceptor')
 // 3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
const data=config.data
//判断data是不是对象
if (data instanceof Object) {
  config.data = qs.stringify(data)
}

return config
})

//添加响应拦截器
instance.interceptors.response.use(
  response=>{
    console.log('res interceptor')
    return response.data
  },
  //请求出错返回错误
  error=>{
    alert('请求出错'+error.message)
    return new Promise(()=>{})
  }
)
export default instance