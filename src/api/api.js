import axios from "axios";

const Api = axios.create({
    baseURL: 'https://61da936a4593510017aff59d.mockapi.io/pizza/'
})

export default {
    getAllPizza: ()=> Api.get('pizzas')
};