import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3001'
})

// usando metodo interceptor para pegar as informaçoes do local storage
api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('deveburguer:userData')

    const token = userData && JSON.parse(userData).token
// espondo o token no local e com nome que será procurado pela api
    config.headers.authorization = `Bearer ${token}`
    return config
})