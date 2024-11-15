import axios from "axios";

export const api = axios.create({
    baseURL: 'https://innovative-illumination-production-0226.up.railway.app'  // Adicionando o prefixo 'https://'
});


// usando metodo interceptor para pegar as informaçoes do local storage
api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('deveburguer:userData')

    const token = userData && JSON.parse(userData).token
// espondo o token no local e com nome que será procurado pela api
    config.headers.authorization = `Bearer ${token}`
    return config
})