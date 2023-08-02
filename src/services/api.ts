import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.agbot.com.br/signal/v1/api/',
})
