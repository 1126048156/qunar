import axios from 'axios'
//请求home组件的数据接口
export let getHome = ()=>{
  return axios.get('/static/mork/index.json')
}
axios.interceptors.response.use(function (response) {
  return response.data.data;
})
