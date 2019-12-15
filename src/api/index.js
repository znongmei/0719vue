//接口请求函数
//包含n个接口请求函数，

//通过ajax发送请求，引入ajax
import ajax from "./ajax";
//这里箭头函数不能写{}，这样写没有返回值
export const reqAddress=(longitude, latitude)=>ajax(`/position/${latitude},${longitude}`) 

//获取商品列表
export const reqCategorys = () => ajax('/index_category')
// 3. 根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {params: {longitude, latitude}})
