import axios from 'axios'
//请求home组件的数据接口
export let getHome = ()=>{
  return axios.get('/static/mock/index.json')
}
axios.interceptors.response.use(function (response) {
  return response.data.data;
})

//请求city组件的数据接口
export let getCitites = ()=>{
  return axios.get('/static/mock/city.json')
}

//请求detail组件的数据接口
export let getDetail = (id)=>{
  return axios.get('/static/mock/detail/'+ id + '.json')
}

export let getWeek = (id)=>{
  return axios.get('/static/mock/week/'+ id + '.json')
}

