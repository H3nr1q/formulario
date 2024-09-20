import axios from 'axios'

export const apiSearchZipCode = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export const apiSearchCnpj = axios.create({
  baseURL: '/api',
});