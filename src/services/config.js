import Vue from 'vue'
import axios from 'axios'

const apiCall = (url) => {
  const client = axios.create({
    baseURL: url,
  })
  return {
    crPerson: (payload) => client.post('/person', payload),
    edPerson: (id, payload) => client.put(`/person/${id}`, payload),
    dePerson: (id) => client.delete(`/person/${id}`),
    getById: (id) => client.get(`/person/${id}`),  
    allPeople: () => client.get('/person'), 
  }
}
Vue.prototype.$api = apiCall('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1') //api cedida pela empresa