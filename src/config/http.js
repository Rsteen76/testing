import axios from 'axios'

export const http = axios.create({
  // baseURL: 'http://165.227.1.133/api'
  baseURL: 'http://localhost:8080/api'
})
