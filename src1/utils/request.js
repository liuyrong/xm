import axios from 'axios';
// 创建axios
const Server =axios.create({
  baseURL:"https://api.it120.cc/small4/banner/list",
  timeout:3000,

});
// 请求拦截器
Server.interceptors.request.use(function(config){
return config
// console.log("我是拦截器",config)
},function(error){
   return Promise.reject(error);
});
// 响应拦截器'
Server.interceptors.response.use(function(response){

if(response.status ==200){
    return response.data
}
return response
},function(error){
    return Promise.reject(error);
})
export default Server;